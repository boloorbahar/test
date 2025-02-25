import { Area } from "@ant-design/plots";

const AreaChart = () => {
  const data = [
    { symbol: "GOOG", date: "Nov 1 2004", price: 181.98 },
    { symbol: "GOOG", date: "Dec 1 2004", price: 192.79 },
    { symbol: "GOOG", date: "Jan 1 2005", price: 195.62 },
    // { symbol: "GOOG", date: "Feb 1 2005", price: 187.99 },
    // { symbol: "GOOG", date: "Mar 1 2005", price: 180.51 },
    // { symbol: "GOOG", date: "Apr 1 2005", price: 220 },
    // { symbol: "GOOG", date: "May 1 2005", price: 277.27 },
    // { symbol: "GOOG", date: "Jun 1 2005", price: 294.15 },
    // { symbol: "GOOG", date: "Jul 1 2005", price: 287.76 },
    // { symbol: "GOOG", date: "Aug 1 2005", price: 286 },
    // { symbol: "GOOG", date: "Sep 1 2005", price: 316.46 },
    // { symbol: "GOOG", date: "Oct 1 2005", price: 372.14 },
    // { symbol: "GOOG", date: "Nov 1 2005", price: 404.91 },
    // { symbol: "GOOG", date: "Dec 1 2005", price: 414.86 },
    // { symbol: "GOOG", date: "Jan 1 2006", price: 432.66 },
    // { symbol: "GOOG", date: "Feb 1 2006", price: 362.62 },
    // { symbol: "GOOG", date: "Mar 1 2006", price: 390 },
    // { symbol: "GOOG", date: "Apr 1 2006", price: 417.94 },
    // { symbol: "GOOG", date: "May 1 2006", price: 371.82 },
    // { symbol: "GOOG", date: "Jun 1 2006", price: 419.33 },
    // { symbol: "GOOG", date: "Jul 1 2006", price: 386.6 },
    // { symbol: "GOOG", date: "Aug 1 2006", price: 378.53 },
    // { symbol: "GOOG", date: "Sep 1 2006", price: 401.9 },
    // { symbol: "GOOG", date: "Oct 1 2006", price: 476.39 },
    // { symbol: "GOOG", date: "Nov 1 2006", price: 484.81 },
    // { symbol: "GOOG", date: "Dec 1 2006", price: 460.48 },
    // { symbol: "GOOG", date: "Jan 1 2007", price: 501.5 },
    // { symbol: "GOOG", date: "Feb 1 2007", price: 449.45 },
    // { symbol: "GOOG", date: "Mar 1 2007", price: 458.16 },
    // { symbol: "GOOG", date: "Apr 1 2007", price: 471.38 },
    // { symbol: "GOOG", date: "May 1 2007", price: 497.91 },
    // { symbol: "GOOG", date: "Jun 1 2007", price: 522.7 },
    // { symbol: "GOOG", date: "Jul 1 2007", price: 510 },
    // { symbol: "GOOG", date: "Aug 1 2007", price: 515.25 },
    // { symbol: "GOOG", date: "Sep 1 2007", price: 567.27 },
    // { symbol: "GOOG", date: "Oct 1 2007", price: 707 },
    // { symbol: "GOOG", date: "Nov 1 2007", price: 693 },
    // { symbol: "GOOG", date: "Dec 1 2007", price: 691.48 },
    // { symbol: "GOOG", date: "Jan 1 2008", price: 564.3 },
    // { symbol: "GOOG", date: "Feb 1 2008", price: 471.18 },
    // { symbol: "GOOG", date: "Mar 1 2008", price: 440.47 },
    // { symbol: "GOOG", date: "Apr 1 2008", price: 574.29 },
    // { symbol: "GOOG", date: "May 1 2008", price: 585.8 },
    // { symbol: "GOOG", date: "Jun 1 2008", price: 526.42 },
    // { symbol: "GOOG", date: "Jul 1 2008", price: 473.75 },
    // { symbol: "GOOG", date: "Aug 1 2008", price: 463.29 },
    // { symbol: "GOOG", date: "Sep 1 2008", price: 400.52 },
    // { symbol: "GOOG", date: "Oct 1 2008", price: 359.36 },
    // { symbol: "GOOG", date: "Nov 1 2008", price: 292.96 },
    // { symbol: "GOOG", date: "Dec 1 2008", price: 307.65 },
    // { symbol: "GOOG", date: "Jan 1 2009", price: 338.53 },
    // { symbol: "GOOG", date: "Feb 1 2009", price: 337.99 },
    // { symbol: "GOOG", date: "Mar 1 2009", price: 348.06 },
    // { symbol: "GOOG", date: "Apr 1 2009", price: 395.97 },
    // { symbol: "GOOG", date: "May 1 2009", price: 417.23 },
    // { symbol: "GOOG", date: "Jun 1 2009", price: 421.59 },
    // { symbol: "GOOG", date: "Jul 1 2009", price: 443.05 },
    // { symbol: "GOOG", date: "Aug 1 2009", price: 461.67 },
    // { symbol: "GOOG", date: "Sep 1 2009", price: 495.85 },
    // { symbol: "GOOG", date: "Oct 1 2009", price: 536.12 },
    // { symbol: "GOOG", date: "Nov 1 2009", price: 583 },
    // { symbol: "GOOG", date: "Dec 1 2009", price: 619.98 },
    // { symbol: "GOOG", date: "Jan 1 2010", price: 529.94 },
    // { symbol: "GOOG", date: "Feb 1 2010", price: 526.8 },
    // { symbol: "GOOG", date: "Mar 1 2010", price: 560.19 },
  ];
  const config = {
    height: 220,
    data: data || [],
    xField: (d) => new Date(d?.date),
    yField: "price",
    meta: {
      date: {
        type: "time", // مشخص کردن نوع فیلد تاریخ
      },
    },
    style: {
      fill: "linear-gradient(-90deg, #1E1E1E 0%, #2D2141 100%)",
    },
    axis: {
      x: {
        labelFill: "#fff",
      },
      y: {
        labelFormatter: "~s",
        labelFill: "#fff",
      },
    },
    line: {
      style: {
        stroke: "#625B71",
        strokeWidth: 2,
      },
    },
  };
  return <Area {...config} />;
};

export default AreaChart;
