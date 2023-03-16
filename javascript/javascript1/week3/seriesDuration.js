const seriesDurations = [{
        title: "Game of thrones",
        days: 3,
        hours: 1,
        minutes: 0,
    },
    {
        title: "Rita",
        days: 6,
        hours: 15,
        minutes: 0,
    },
    {
        title: "Emily in Paris",
        days: 6,
        hours: 17,
        minutes: 0,
    }
];
let totalTimeofSeries = 0;
const totalTimeOfMyLifeInMinutes = 80 * 365 * 24 * 60;
function seriesTimePeriodInMyLife(seriesDurations) {
    for (let i = 0; i < seriesDurations.length; i++) {
        let eachSeriesTimeDurationInMinutes = (seriesDurations[i].days * 24 * 60) + (seriesDurations[i].hours * 60) + (seriesDurations[i].minutes);
        let eachSeriesTimeDurationInPercentage = (eachSeriesTimeDurationInMinutes * 100) / totalTimeOfMyLifeInMinutes;
        console.log(`"${seriesDurations[i].title}" took ${eachSeriesTimeDurationInPercentage.toFixed(3)}% of my life`);
        totalTimeofSeries = totalTimeofSeries + eachSeriesTimeDurationInPercentage;
    }
    console.log(`Total percentage of my life time used to watch series ${totalTimeofSeries.toFixed(4)}% which is not good`);
}

seriesTimePeriodInMyLife(seriesDurations);