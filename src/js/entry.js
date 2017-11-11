'use strict';
import { FrequencyDistTable } from './FrequencyDistTable';
const d3 = require('./d3.min.js');

/*
 * Frequency Distribution Tables – How frequently is data distributed at each measure?
 *
 * The first column contains the measure ordered from highest to lowest, the second column contains the number of cases of that measure.
 * Use the symbol N to represent the total number of cases in a group.
 */

// create a random dataset for 100 students taking a test with scores from 0-50
const randomDataset = () => {
  let dataset = [];
  for (let i = 0; i < 100; i++) {
    dataset.push({score: Math.ceil(Math.random() * 50)});
  }
  return dataset;
}

// create 8 tables
const range = [0,1,2,3,4,5,6,7];
range.forEach(r => {
  d3.text('src/template/table.html', str => {
    d3.select('.container').append('div').attr('id', `freq-table-${r}`).attr('class', 'freq-table').html(str);

    new FrequencyDistTable(`#freq-table-${r} tbody`, randomDataset(), `#freq-table-${r}`, 'SCORE', `Table 2.${r+1}   /   Simple Frequency Distribution of Anxiety Scores for 100 College Students`, 'Ahana, E. Y. A study on the reliability and internal consistency of a manifest anxiety scale. M.A. thesis, Northwestern Univeristy, 1952.').init();
  });
});
