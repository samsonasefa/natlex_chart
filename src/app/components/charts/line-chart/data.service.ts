import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  // The minimum and the maximum daily weather data of Joensuu, Finland
  // of Jan 01, 2024 July July 26, 2024

  // url
  // https://archive-api.open-meteo.com/v1/archive?latitude=62.601&longitude=29.7636&start_date=2023-01-01&end_date=2024-07-25&daily=temperature_2m_max,temperature_2m_min

  getData(): any {
    return {
      latitude: 62.60105,
      longitude: 29.467005,
      generationtime_ms: 0.8699893951416016,
      utc_offset_seconds: 0,
      timezone: 'GMT',
      timezone_abbreviation: 'GMT',
      elevation: 89.0,
      daily_units: {
        time: 'iso8601',
        temperature_2m_max: '°C',
        temperature_2m_min: '°C',
      },
      daily: {
        time: [
          '2023-01-01',
          '2023-01-02',
          '2023-01-03',
          '2023-01-04',
          '2023-01-05',
          '2023-01-06',
          '2023-01-07',
          '2023-01-08',
          '2023-01-09',
          '2023-01-10',
          '2023-01-11',
          '2023-01-12',
          '2023-01-13',
          '2023-01-14',
          '2023-01-15',
          '2023-01-16',
          '2023-01-17',
          '2023-01-18',
          '2023-01-19',
          '2023-01-20',
          '2023-01-21',
          '2023-01-22',
          '2023-01-23',
          '2023-01-24',
          '2023-01-25',
          '2023-01-26',
          '2023-01-27',
          '2023-01-28',
          '2023-01-29',
          '2023-01-30',
          '2023-01-31',
          '2023-02-01',
          '2023-02-02',
          '2023-02-03',
          '2023-02-04',
          '2023-02-05',
          '2023-02-06',
          '2023-02-07',
          '2023-02-08',
          '2023-02-09',
          '2023-02-10',
          '2023-02-11',
          '2023-02-12',
          '2023-02-13',
          '2023-02-14',
          '2023-02-15',
          '2023-02-16',
          '2023-02-17',
          '2023-02-18',
          '2023-02-19',
          '2023-02-20',
          '2023-02-21',
          '2023-02-22',
          '2023-02-23',
          '2023-02-24',
          '2023-02-25',
          '2023-02-26',
          '2023-02-27',
          '2023-02-28',
          '2023-03-01',
          '2023-03-02',
          '2023-03-03',
          '2023-03-04',
          '2023-03-05',
          '2023-03-06',
          '2023-03-07',
          '2023-03-08',
          '2023-03-09',
          '2023-03-10',
          '2023-03-11',
          '2023-03-12',
          '2023-03-13',
          '2023-03-14',
          '2023-03-15',
          '2023-03-16',
          '2023-03-17',
          '2023-03-18',
          '2023-03-19',
          '2023-03-20',
          '2023-03-21',
          '2023-03-22',
          '2023-03-23',
          '2023-03-24',
          '2023-03-25',
          '2023-03-26',
          '2023-03-27',
          '2023-03-28',
          '2023-03-29',
          '2023-03-30',
          '2023-03-31',
          '2023-04-01',
          '2023-04-02',
          '2023-04-03',
          '2023-04-04',
          '2023-04-05',
          '2023-04-06',
          '2023-04-07',
          '2023-04-08',
          '2023-04-09',
          '2023-04-10',
          '2023-04-11',
          '2023-04-12',
          '2023-04-13',
          '2023-04-14',
          '2023-04-15',
          '2023-04-16',
          '2023-04-17',
          '2023-04-18',
          '2023-04-19',
          '2023-04-20',
          '2023-04-21',
          '2023-04-22',
          '2023-04-23',
          '2023-04-24',
          '2023-04-25',
          '2023-04-26',
          '2023-04-27',
          '2023-04-28',
          '2023-04-29',
          '2023-04-30',
          '2023-05-01',
          '2023-05-02',
          '2023-05-03',
          '2023-05-04',
          '2023-05-05',
          '2023-05-06',
          '2023-05-07',
          '2023-05-08',
          '2023-05-09',
          '2023-05-10',
          '2023-05-11',
          '2023-05-12',
          '2023-05-13',
          '2023-05-14',
          '2023-05-15',
          '2023-05-16',
          '2023-05-17',
          '2023-05-18',
          '2023-05-19',
          '2023-05-20',
          '2023-05-21',
          '2023-05-22',
          '2023-05-23',
          '2023-05-24',
          '2023-05-25',
          '2023-05-26',
          '2023-05-27',
          '2023-05-28',
          '2023-05-29',
          '2023-05-30',
          '2023-05-31',
          '2023-06-01',
          '2023-06-02',
          '2023-06-03',
          '2023-06-04',
          '2023-06-05',
          '2023-06-06',
          '2023-06-07',
          '2023-06-08',
          '2023-06-09',
          '2023-06-10',
          '2023-06-11',
          '2023-06-12',
          '2023-06-13',
          '2023-06-14',
          '2023-06-15',
          '2023-06-16',
          '2023-06-17',
          '2023-06-18',
          '2023-06-19',
          '2023-06-20',
          '2023-06-21',
          '2023-06-22',
          '2023-06-23',
          '2023-06-24',
          '2023-06-25',
          '2023-06-26',
          '2023-06-27',
          '2023-06-28',
          '2023-06-29',
          '2023-06-30',
          '2023-07-01',
          '2023-07-02',
          '2023-07-03',
          '2023-07-04',
          '2023-07-05',
          '2023-07-06',
          '2023-07-07',
          '2023-07-08',
          '2023-07-09',
          '2023-07-10',
          '2023-07-11',
          '2023-07-12',
          '2023-07-13',
          '2023-07-14',
          '2023-07-15',
          '2023-07-16',
          '2023-07-17',
          '2023-07-18',
          '2023-07-19',
          '2023-07-20',
          '2023-07-21',
          '2023-07-22',
          '2023-07-23',
          '2023-07-24',
          '2023-07-25',
          '2023-07-26',
          '2023-07-27',
          '2023-07-28',
          '2023-07-29',
          '2023-07-30',
          '2023-07-31',
          '2023-08-01',
          '2023-08-02',
          '2023-08-03',
          '2023-08-04',
          '2023-08-05',
          '2023-08-06',
          '2023-08-07',
          '2023-08-08',
          '2023-08-09',
          '2023-08-10',
          '2023-08-11',
          '2023-08-12',
          '2023-08-13',
          '2023-08-14',
          '2023-08-15',
          '2023-08-16',
          '2023-08-17',
          '2023-08-18',
          '2023-08-19',
          '2023-08-20',
          '2023-08-21',
          '2023-08-22',
          '2023-08-23',
          '2023-08-24',
          '2023-08-25',
          '2023-08-26',
          '2023-08-27',
          '2023-08-28',
          '2023-08-29',
          '2023-08-30',
          '2023-08-31',
          '2023-09-01',
          '2023-09-02',
          '2023-09-03',
          '2023-09-04',
          '2023-09-05',
          '2023-09-06',
          '2023-09-07',
          '2023-09-08',
          '2023-09-09',
          '2023-09-10',
          '2023-09-11',
          '2023-09-12',
          '2023-09-13',
          '2023-09-14',
          '2023-09-15',
          '2023-09-16',
          '2023-09-17',
          '2023-09-18',
          '2023-09-19',
          '2023-09-20',
          '2023-09-21',
          '2023-09-22',
          '2023-09-23',
          '2023-09-24',
          '2023-09-25',
          '2023-09-26',
          '2023-09-27',
          '2023-09-28',
          '2023-09-29',
          '2023-09-30',
          '2023-10-01',
          '2023-10-02',
          '2023-10-03',
          '2023-10-04',
          '2023-10-05',
          '2023-10-06',
          '2023-10-07',
          '2023-10-08',
          '2023-10-09',
          '2023-10-10',
          '2023-10-11',
          '2023-10-12',
          '2023-10-13',
          '2023-10-14',
          '2023-10-15',
          '2023-10-16',
          '2023-10-17',
          '2023-10-18',
          '2023-10-19',
          '2023-10-20',
          '2023-10-21',
          '2023-10-22',
          '2023-10-23',
          '2023-10-24',
          '2023-10-25',
          '2023-10-26',
          '2023-10-27',
          '2023-10-28',
          '2023-10-29',
          '2023-10-30',
          '2023-10-31',
          '2023-11-01',
          '2023-11-02',
          '2023-11-03',
          '2023-11-04',
          '2023-11-05',
          '2023-11-06',
          '2023-11-07',
          '2023-11-08',
          '2023-11-09',
          '2023-11-10',
          '2023-11-11',
          '2023-11-12',
          '2023-11-13',
          '2023-11-14',
          '2023-11-15',
          '2023-11-16',
          '2023-11-17',
          '2023-11-18',
          '2023-11-19',
          '2023-11-20',
          '2023-11-21',
          '2023-11-22',
          '2023-11-23',
          '2023-11-24',
          '2023-11-25',
          '2023-11-26',
          '2023-11-27',
          '2023-11-28',
          '2023-11-29',
          '2023-11-30',
          '2023-12-01',
          '2023-12-02',
          '2023-12-03',
          '2023-12-04',
          '2023-12-05',
          '2023-12-06',
          '2023-12-07',
          '2023-12-08',
          '2023-12-09',
          '2023-12-10',
          '2023-12-11',
          '2023-12-12',
          '2023-12-13',
          '2023-12-14',
          '2023-12-15',
          '2023-12-16',
          '2023-12-17',
          '2023-12-18',
          '2023-12-19',
          '2023-12-20',
          '2023-12-21',
          '2023-12-22',
          '2023-12-23',
          '2023-12-24',
          '2023-12-25',
          '2023-12-26',
          '2023-12-27',
          '2023-12-28',
          '2023-12-29',
          '2023-12-30',
          '2023-12-31',
          '2024-01-01',
          '2024-01-02',
          '2024-01-03',
          '2024-01-04',
          '2024-01-05',
          '2024-01-06',
          '2024-01-07',
          '2024-01-08',
          '2024-01-09',
          '2024-01-10',
          '2024-01-11',
          '2024-01-12',
          '2024-01-13',
          '2024-01-14',
          '2024-01-15',
          '2024-01-16',
          '2024-01-17',
          '2024-01-18',
          '2024-01-19',
          '2024-01-20',
          '2024-01-21',
          '2024-01-22',
          '2024-01-23',
          '2024-01-24',
          '2024-01-25',
          '2024-01-26',
          '2024-01-27',
          '2024-01-28',
          '2024-01-29',
          '2024-01-30',
          '2024-01-31',
          '2024-02-01',
          '2024-02-02',
          '2024-02-03',
          '2024-02-04',
          '2024-02-05',
          '2024-02-06',
          '2024-02-07',
          '2024-02-08',
          '2024-02-09',
          '2024-02-10',
          '2024-02-11',
          '2024-02-12',
          '2024-02-13',
          '2024-02-14',
          '2024-02-15',
          '2024-02-16',
          '2024-02-17',
          '2024-02-18',
          '2024-02-19',
          '2024-02-20',
          '2024-02-21',
          '2024-02-22',
          '2024-02-23',
          '2024-02-24',
          '2024-02-25',
          '2024-02-26',
          '2024-02-27',
          '2024-02-28',
          '2024-02-29',
          '2024-03-01',
          '2024-03-02',
          '2024-03-03',
          '2024-03-04',
          '2024-03-05',
          '2024-03-06',
          '2024-03-07',
          '2024-03-08',
          '2024-03-09',
          '2024-03-10',
          '2024-03-11',
          '2024-03-12',
          '2024-03-13',
          '2024-03-14',
          '2024-03-15',
          '2024-03-16',
          '2024-03-17',
          '2024-03-18',
          '2024-03-19',
          '2024-03-20',
          '2024-03-21',
          '2024-03-22',
          '2024-03-23',
          '2024-03-24',
          '2024-03-25',
          '2024-03-26',
          '2024-03-27',
          '2024-03-28',
          '2024-03-29',
          '2024-03-30',
          '2024-03-31',
          '2024-04-01',
          '2024-04-02',
          '2024-04-03',
          '2024-04-04',
          '2024-04-05',
          '2024-04-06',
          '2024-04-07',
          '2024-04-08',
          '2024-04-09',
          '2024-04-10',
          '2024-04-11',
          '2024-04-12',
          '2024-04-13',
          '2024-04-14',
          '2024-04-15',
          '2024-04-16',
          '2024-04-17',
          '2024-04-18',
          '2024-04-19',
          '2024-04-20',
          '2024-04-21',
          '2024-04-22',
          '2024-04-23',
          '2024-04-24',
          '2024-04-25',
          '2024-04-26',
          '2024-04-27',
          '2024-04-28',
          '2024-04-29',
          '2024-04-30',
          '2024-05-01',
          '2024-05-02',
          '2024-05-03',
          '2024-05-04',
          '2024-05-05',
          '2024-05-06',
          '2024-05-07',
          '2024-05-08',
          '2024-05-09',
          '2024-05-10',
          '2024-05-11',
          '2024-05-12',
          '2024-05-13',
          '2024-05-14',
          '2024-05-15',
          '2024-05-16',
          '2024-05-17',
          '2024-05-18',
          '2024-05-19',
          '2024-05-20',
          '2024-05-21',
          '2024-05-22',
          '2024-05-23',
          '2024-05-24',
          '2024-05-25',
          '2024-05-26',
          '2024-05-27',
          '2024-05-28',
          '2024-05-29',
          '2024-05-30',
          '2024-05-31',
          '2024-06-01',
          '2024-06-02',
          '2024-06-03',
          '2024-06-04',
          '2024-06-05',
          '2024-06-06',
          '2024-06-07',
          '2024-06-08',
          '2024-06-09',
          '2024-06-10',
          '2024-06-11',
          '2024-06-12',
          '2024-06-13',
          '2024-06-14',
          '2024-06-15',
          '2024-06-16',
          '2024-06-17',
          '2024-06-18',
          '2024-06-19',
          '2024-06-20',
          '2024-06-21',
          '2024-06-22',
          '2024-06-23',
          '2024-06-24',
          '2024-06-25',
          '2024-06-26',
          '2024-06-27',
          '2024-06-28',
          '2024-06-29',
          '2024-06-30',
          '2024-07-01',
          '2024-07-02',
          '2024-07-03',
          '2024-07-04',
          '2024-07-05',
          '2024-07-06',
          '2024-07-07',
          '2024-07-08',
          '2024-07-09',
          '2024-07-10',
          '2024-07-11',
          '2024-07-12',
          '2024-07-13',
          '2024-07-14',
          '2024-07-15',
          '2024-07-16',
          '2024-07-17',
          '2024-07-18',
          '2024-07-19',
          '2024-07-20',
          '2024-07-21',
          '2024-07-22',
          '2024-07-23',
          '2024-07-24',
          '2024-07-25',
        ],
        temperature_2m_max: [
          2.2,
          -2.9,
          -6.0,
          -5.7,
          -7.4,
          -7.8,
          -12.5,
          -9.7,
          -8.2,
          -4.4,
          1.2,
          0.5,
          0.6,
          1.2,
          1.4,
          1.1,
          1.7,
          0.7,
          0.4,
          -0.2,
          -2.5,
          -3.0,
          -5.5,
          -0.9,
          2.2,
          1.2,
          -6.2,
          -0.6,
          -0.2,
          0.5,
          -0.2,
          -3.3,
          -3.2,
          -4.9,
          -5.4,
          -5.1,
          -4.2,
          -0.0,
          0.5,
          1.4,
          0.4,
          -4.7,
          1.4,
          2.8,
          0.6,
          -0.9,
          -0.1,
          -1.1,
          -4.0,
          -3.9,
          -7.3,
          -10.6,
          -12.4,
          -5.3,
          -4.0,
          -3.8,
          -7.4,
          1.6,
          2.5,
          -0.8,
          2.7,
          0.1,
          -0.8,
          -4.6,
          -6.2,
          -8.8,
          -9.2,
          -10.4,
          -5.4,
          -5.9,
          -5.6,
          -2.7,
          3.0,
          2.6,
          -1.0,
          -1.5,
          1.4,
          3.0,
          1.7,
          1.6,
          0.6,
          3.4,
          1.9,
          1.1,
          -2.4,
          -2.4,
          -3.9,
          -1.8,
          -3.0,
          -1.2,
          1.4,
          -0.1,
          -0.1,
          -0.3,
          4.4,
          7.2,
          5.8,
          5.8,
          9.7,
          8.8,
          6.4,
          10.0,
          3.2,
          4.4,
          6.2,
          8.1,
          9.8,
          8.5,
          8.0,
          10.6,
          11.7,
          10.5,
          5.2,
          9.4,
          7.8,
          17.0,
          15.6,
          4.3,
          8.0,
          5.9,
          8.0,
          6.2,
          6.6,
          3.9,
          3.6,
          6.3,
          10.1,
          12.1,
          13.4,
          16.0,
          17.8,
          19.8,
          17.5,
          16.9,
          16.9,
          17.9,
          12.7,
          9.3,
          14.3,
          19.7,
          19.3,
          21.3,
          17.2,
          21.7,
          15.5,
          13.0,
          13.0,
          15.0,
          13.2,
          13.1,
          12.7,
          9.1,
          9.6,
          10.6,
          11.4,
          14.7,
          15.1,
          13.4,
          13.3,
          11.6,
          16.0,
          20.7,
          21.9,
          23.1,
          22.5,
          25.2,
          24.8,
          22.1,
          20.3,
          25.1,
          22.7,
          24.0,
          23.5,
          17.2,
          20.1,
          21.0,
          23.7,
          22.8,
          22.7,
          23.8,
          22.1,
          17.1,
          16.1,
          17.7,
          16.0,
          15.6,
          20.7,
          16.1,
          18.5,
          16.6,
          16.7,
          19.1,
          21.3,
          16.1,
          20.1,
          20.8,
          23.5,
          22.0,
          20.4,
          20.0,
          19.4,
          16.4,
          14.8,
          18.1,
          15.2,
          18.1,
          21.4,
          21.8,
          19.1,
          18.7,
          21.3,
          22.1,
          21.5,
          23.5,
          20.0,
          20.2,
          20.4,
          22.2,
          27.6,
          24.6,
          21.9,
          21.2,
          22.1,
          21.1,
          22.4,
          21.5,
          22.2,
          21.9,
          21.0,
          17.1,
          17.2,
          20.2,
          19.9,
          19.2,
          15.2,
          13.0,
          14.1,
          17.5,
          18.3,
          17.5,
          17.8,
          19.2,
          19.2,
          19.2,
          17.9,
          18.2,
          16.9,
          18.1,
          14.7,
          16.9,
          17.3,
          19.3,
          18.8,
          18.0,
          20.3,
          17.4,
          13.4,
          13.6,
          13.4,
          14.4,
          12.6,
          14.6,
          14.8,
          16.8,
          18.5,
          18.1,
          15.8,
          15.3,
          15.6,
          15.0,
          15.3,
          16.2,
          14.7,
          11.7,
          10.7,
          11.7,
          9.2,
          8.9,
          7.5,
          5.6,
          6.4,
          3.4,
          4.6,
          10.2,
          8.5,
          6.1,
          8.9,
          5.9,
          5.3,
          4.4,
          1.8,
          2.0,
          1.1,
          0.9,
          -0.3,
          -0.9,
          -1.1,
          -0.3,
          0.1,
          -1.0,
          -1.0,
          -1.9,
          -2.3,
          -2.2,
          0.5,
          0.4,
          0.6,
          2.2,
          2.3,
          2.5,
          1.9,
          1.0,
          0.2,
          1.9,
          1.1,
          -0.0,
          -1.0,
          -1.1,
          -2.3,
          -4.0,
          -5.6,
          -1.8,
          -2.3,
          -2.4,
          -5.3,
          -2.5,
          -2.6,
          -6.5,
          -7.7,
          -11.3,
          -6.0,
          -3.1,
          -3.2,
          -6.2,
          -7.2,
          -8.5,
          -8.9,
          -9.4,
          -9.6,
          -8.0,
          -7.6,
          -9.5,
          -11.1,
          -11.4,
          -9.8,
          -9.3,
          -5.9,
          -5.9,
          -8.0,
          0.2,
          2.3,
          -0.9,
          1.8,
          0.4,
          -2.5,
          -1.4,
          -0.1,
          -0.9,
          -2.3,
          -4.6,
          -4.9,
          -5.3,
          -6.7,
          -9.6,
          -7.9,
          -13.2,
          -18.4,
          -21.7,
          -29.4,
          -28.6,
          -25.2,
          -9.5,
          -4.0,
          2.9,
          1.9,
          -4.2,
          -14.3,
          -9.2,
          -8.6,
          -9.6,
          -13.3,
          -17.0,
          -9.9,
          -8.0,
          -12.2,
          -2.4,
          0.7,
          2.1,
          1.0,
          -0.8,
          -9.3,
          -4.2,
          1.0,
          3.3,
          0.9,
          0.8,
          1.5,
          -2.9,
          -0.1,
          -3.1,
          -4.8,
          -10.6,
          -17.0,
          -18.5,
          -13.3,
          -11.0,
          -13.0,
          -13.3,
          -13.6,
          -11.2,
          -9.0,
          -2.6,
          1.9,
          -4.6,
          -5.3,
          -2.6,
          -2.0,
          0.2,
          1.2,
          1.4,
          2.7,
          0.5,
          1.8,
          -0.8,
          1.1,
          0.9,
          -0.5,
          1.2,
          1.7,
          -0.5,
          -1.0,
          1.1,
          -0.9,
          -1.1,
          2.7,
          -0.7,
          1.3,
          1.9,
          2.8,
          4.7,
          3.3,
          -2.3,
          -2.1,
          -1.9,
          1.2,
          0.9,
          1.2,
          1.3,
          -0.9,
          -1.6,
          -1.3,
          2.1,
          5.6,
          5.0,
          2.1,
          5.1,
          6.5,
          0.9,
          -2.3,
          -3.5,
          -3.0,
          -0.3,
          4.5,
          8.3,
          5.1,
          6.9,
          9.3,
          7.8,
          9.1,
          9.4,
          7.1,
          4.1,
          -1.7,
          -2.2,
          -1.5,
          -4.2,
          0.3,
          2.4,
          3.5,
          3.9,
          5.5,
          5.0,
          9.2,
          8.8,
          12.7,
          9.0,
          9.3,
          12.5,
          4.1,
          11.5,
          4.9,
          4.8,
          3.9,
          3.1,
          7.6,
          7.0,
          6.4,
          11.8,
          11.5,
          15.4,
          22.5,
          17.8,
          18.7,
          20.3,
          22.6,
          14.5,
          15.0,
          17.8,
          24.4,
          25.0,
          19.6,
          18.2,
          24.5,
          26.1,
          24.8,
          25.2,
          25.2,
          26.3,
          22.7,
          23.0,
          24.6,
          26.1,
          24.7,
          18.3,
          17.2,
          17.3,
          14.4,
          17.5,
          15.1,
          17.3,
          18.7,
          18.2,
          20.7,
          23.6,
          19.7,
          20.1,
          19.0,
          16.0,
          18.0,
          21.0,
          19.1,
          23.1,
          25.8,
          26.7,
          26.6,
          26.5,
          22.6,
          22.5,
          21.9,
          18.6,
          20.1,
          19.1,
          18.4,
          19.2,
          21.2,
          19.8,
          21.6,
          22.4,
          21.4,
          23.4,
          22.9,
          18.3,
          20.9,
          23.3,
          23.1,
          20.6,
          21.0,
          24.0,
          24.5,
          24.3,
          18.9,
          null,
        ],
        temperature_2m_min: [
          -4.1,
          -8.4,
          -10.8,
          -9.9,
          -10.6,
          -11.3,
          -14.5,
          -13.3,
          -12.7,
          -9.2,
          -3.1,
          -1.9,
          -0.6,
          0.4,
          0.4,
          0.4,
          -1.6,
          -1.7,
          -0.6,
          -3.7,
          -3.3,
          -6.1,
          -7.4,
          -4.5,
          -1.2,
          -5.5,
          -8.6,
          -6.7,
          -3.7,
          -0.8,
          -3.4,
          -5.9,
          -5.8,
          -6.5,
          -10.8,
          -11.8,
          -7.1,
          -7.2,
          -0.6,
          0.2,
          -4.5,
          -7.8,
          -8.8,
          0.6,
          -2.6,
          -3.6,
          -1.6,
          -3.2,
          -4.9,
          -6.6,
          -9.9,
          -15.0,
          -15.8,
          -15.1,
          -5.4,
          -8.0,
          -9.7,
          -11.3,
          -4.3,
          -6.0,
          -5.7,
          -4.4,
          -6.6,
          -7.1,
          -8.7,
          -12.0,
          -14.4,
          -13.9,
          -13.8,
          -10.5,
          -8.2,
          -9.7,
          -5.3,
          -2.6,
          -5.9,
          -8.3,
          -3.7,
          0.1,
          -1.0,
          -4.5,
          -5.2,
          -2.2,
          -3.0,
          -3.6,
          -7.0,
          -6.8,
          -6.4,
          -5.7,
          -8.5,
          -8.7,
          -8.5,
          -7.2,
          -6.6,
          -8.5,
          -7.3,
          -4.7,
          -3.9,
          -3.7,
          -2.2,
          -1.7,
          -3.4,
          -2.2,
          -3.4,
          -5.4,
          -5.1,
          -4.0,
          -4.0,
          -0.7,
          -2.2,
          0.9,
          -0.1,
          -0.1,
          -0.5,
          0.6,
          -1.1,
          2.8,
          4.1,
          -1.3,
          -1.4,
          0.4,
          -0.6,
          1.1,
          0.5,
          -2.3,
          -2.5,
          -1.3,
          0.9,
          2.7,
          4.8,
          5.2,
          6.6,
          6.5,
          8.0,
          7.1,
          6.4,
          8.2,
          9.2,
          5.7,
          3.8,
          7.2,
          7.5,
          8.6,
          10.1,
          9.9,
          8.3,
          5.9,
          4.7,
          6.4,
          7.5,
          6.7,
          7.8,
          4.1,
          3.1,
          3.9,
          6.4,
          7.7,
          7.1,
          7.8,
          6.9,
          6.9,
          5.1,
          9.0,
          11.5,
          12.6,
          11.1,
          13.2,
          12.6,
          12.7,
          12.6,
          13.2,
          15.1,
          14.6,
          15.3,
          14.8,
          14.2,
          14.4,
          16.0,
          16.9,
          18.0,
          16.8,
          16.5,
          12.6,
          12.0,
          12.7,
          12.0,
          12.1,
          13.4,
          14.2,
          12.0,
          10.3,
          9.9,
          11.6,
          11.7,
          13.1,
          13.9,
          15.5,
          14.8,
          16.7,
          16.1,
          14.6,
          13.9,
          13.4,
          11.8,
          13.8,
          11.3,
          10.5,
          14.5,
          14.4,
          13.9,
          13.6,
          14.8,
          14.4,
          16.5,
          17.4,
          17.4,
          15.7,
          16.3,
          15.7,
          17.9,
          18.7,
          16.1,
          16.4,
          16.5,
          16.2,
          16.4,
          17.6,
          16.2,
          17.9,
          14.5,
          12.8,
          10.8,
          12.5,
          14.1,
          13.1,
          12.9,
          11.6,
          11.9,
          11.5,
          9.8,
          11.0,
          13.4,
          12.3,
          15.5,
          15.6,
          14.5,
          13.7,
          12.8,
          10.7,
          10.2,
          9.4,
          10.1,
          12.8,
          13.1,
          14.7,
          15.2,
          12.1,
          10.2,
          9.0,
          10.6,
          9.6,
          9.6,
          8.6,
          10.8,
          10.1,
          13.4,
          12.8,
          11.3,
          10.5,
          11.9,
          11.5,
          11.7,
          12.0,
          11.2,
          8.8,
          8.3,
          8.4,
          7.5,
          4.0,
          3.2,
          1.2,
          2.3,
          1.2,
          0.7,
          4.4,
          2.8,
          3.7,
          4.7,
          3.4,
          2.4,
          1.7,
          0.2,
          -0.9,
          -2.3,
          -3.2,
          -3.2,
          -1.9,
          -2.7,
          -2.7,
          -3.3,
          -4.1,
          -3.4,
          -5.7,
          -5.0,
          -7.4,
          -3.0,
          -3.1,
          -3.6,
          0.6,
          0.2,
          1.0,
          0.2,
          0.0,
          -0.5,
          -0.6,
          -0.7,
          -1.7,
          -2.1,
          -3.0,
          -5.5,
          -6.9,
          -8.4,
          -5.2,
          -4.0,
          -5.6,
          -8.2,
          -8.6,
          -6.2,
          -12.3,
          -14.6,
          -15.2,
          -16.0,
          -5.5,
          -6.9,
          -9.7,
          -9.2,
          -9.5,
          -10.6,
          -12.0,
          -11.0,
          -9.9,
          -10.2,
          -14.0,
          -15.1,
          -12.6,
          -12.0,
          -12.0,
          -9.4,
          -8.1,
          -8.7,
          -7.9,
          -1.0,
          -3.4,
          -2.0,
          -3.9,
          -5.3,
          -3.3,
          -1.9,
          -2.3,
          -5.6,
          -7.2,
          -6.2,
          -7.2,
          -11.4,
          -13.5,
          -12.4,
          -25.3,
          -24.8,
          -31.3,
          -32.5,
          -31.8,
          -29.4,
          -28.3,
          -9.7,
          -7.2,
          -8.2,
          -15.6,
          -18.0,
          -18.7,
          -10.0,
          -13.1,
          -20.1,
          -22.7,
          -15.9,
          -14.1,
          -16.6,
          -12.7,
          -3.8,
          0.4,
          -1.7,
          -9.1,
          -14.9,
          -10.7,
          -4.1,
          1.2,
          -3.6,
          -2.7,
          -3.7,
          -8.5,
          -7.9,
          -5.1,
          -10.7,
          -17.4,
          -24.8,
          -26.5,
          -20.6,
          -15.3,
          -21.3,
          -20.1,
          -18.7,
          -16.1,
          -11.2,
          -8.8,
          -4.7,
          -10.3,
          -10.1,
          -5.3,
          -3.5,
          -2.7,
          -0.5,
          0.5,
          0.4,
          -2.0,
          -1.0,
          -2.2,
          -0.7,
          -2.0,
          -2.5,
          -0.7,
          -3.3,
          -6.8,
          -6.4,
          -3.3,
          -5.3,
          -5.8,
          -4.7,
          -8.8,
          -12.4,
          -8.4,
          0.2,
          1.4,
          -2.1,
          -10.3,
          -15.1,
          -15.3,
          -4.7,
          -0.1,
          0.1,
          -0.4,
          -3.5,
          -3.7,
          -8.8,
          -7.6,
          -0.1,
          -0.6,
          0.4,
          0.9,
          1.1,
          -3.8,
          -7.7,
          -10.0,
          -14.8,
          -5.0,
          -9.1,
          2.7,
          -0.9,
          -1.4,
          1.4,
          -1.3,
          -1.3,
          1.3,
          1.2,
          -2.1,
          -5.8,
          -6.0,
          -7.5,
          -6.2,
          -9.0,
          -5.2,
          -0.1,
          -0.9,
          -0.8,
          0.9,
          -0.0,
          0.5,
          1.2,
          3.3,
          1.9,
          1.3,
          0.7,
          1.8,
          -0.3,
          -1.2,
          -2.0,
          -3.0,
          -1.2,
          1.2,
          1.2,
          -0.1,
          5.5,
          5.9,
          9.7,
          7.3,
          7.8,
          10.7,
          11.1,
          6.6,
          5.6,
          8.7,
          10.4,
          14.9,
          12.8,
          11.4,
          13.4,
          17.0,
          16.4,
          17.1,
          18.4,
          18.8,
          17.4,
          17.0,
          17.2,
          16.0,
          14.2,
          12.0,
          12.6,
          10.5,
          9.9,
          11.2,
          10.8,
          10.8,
          12.6,
          12.6,
          15.3,
          15.4,
          15.5,
          14.2,
          12.9,
          12.5,
          12.1,
          12.9,
          14.5,
          13.7,
          16.9,
          18.6,
          18.7,
          18.0,
          16.0,
          15.3,
          16.0,
          14.3,
          14.1,
          14.8,
          14.0,
          14.2,
          13.8,
          14.5,
          13.9,
          14.1,
          17.1,
          17.1,
          16.2,
          15.3,
          15.7,
          15.9,
          17.9,
          16.5,
          16.6,
          15.5,
          16.4,
          17.5,
          18.9,
          null,
        ],
      },
    };
  }
}
