const getColors = [
    "#B1B1B1",
    "#F3AA86",
    "#EDEDF5",
    "#DEDEEE",
    "#BAE2BB",
    "#D0ECCD",
    "#BAB5D8",
    "#E3EDF7",
    "#B5D7EB",
    "#98D1AA",
    "#98C1DE",
    "#E3F4E0"
]

const getRandomColors = (number: number) => {
    return getColors
    .sort(() => 0.5 - Math.random())
    .slice(0, number);
}

export default getRandomColors;