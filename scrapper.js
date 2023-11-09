const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

async function scrapeHackerNews() {
  try {
    const response = await axios.get('https://news.ycombinator.com');
    const html = response.data;

    const commentRanges = [
      { range: '0-100', min: 0, max: 100 },
      { range: '101-200', min: 101, max: 200 },
      { range: '201-300', min: 201, max: 300 },
      { range: '301-n', min: 301, max: Number.MAX_SAFE_INTEGER },
    ];

    const $ = cheerio.load(html);

    const items = [];
    $('td.subtext').each((index, element) => {
        const title = $(element).parent().prev().find('.titleline a').text();
        const link = $(element).parent().prev().find('.titleline a').attr('href');
        const subtext = $(element).find('.subline').text();
        const authorName = $(element).find('.hnuser').text();
        const commentsText = subtext.match(/\d+\s*comments/);
        const comments = commentsText ? parseInt(commentsText[0]) : 0;
        const pointsText = subtext.match(/\d+\s*points/);
        const points = pointsText ? parseInt(pointsText[0]) : 0;
        const time = $(element).find('.age').text();
      
        items.push({ title, link, authorName, comments, points, time });
      });

    const groupedResults = {};

    commentRanges.forEach((range) => {
      groupedResults[range.range] = items.filter(
        (item) => item.comments >= range.min && item.comments <= range.max
      );
    });

    // Export as JSON
    fs.writeFileSync('hacker_news.json', JSON.stringify(groupedResults, null, 2));

    console.log('Scraping completed. Results saved as hacker_news.json');
  } catch (error) {
    console.error('An error occurred:', error);
  }
}

scrapeHackerNews();
