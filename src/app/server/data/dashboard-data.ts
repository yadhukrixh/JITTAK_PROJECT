/**
 * Array of dashboard data metrics.
 * 
 * This array contains a list of metrics that represent various statistics and 
 * performance indicators for the system. Each object contains data related to 
 * different aspects of user activity, retention, and account status.
 * 
 * Each object in the array represents a metric with the following properties:
 * 
 * @typedef {Object} DashboardMetric
 * @property {string} label - The label or name of the metric (e.g., "totalUsers", "activeUsers").
 * @property {string} maindata - The main data value for the metric (e.g., total number of users, active users).
 * @property {string} subdata - The supporting data for the metric (e.g., related sub-metrics or additional figures).
 * @property {string} netpercentage - The percentage change or net value, often representing growth or decline.
 * @property {string} netstatus - The status of the metric, indicating whether it is "up" or "down".
 * 
 * @example
 * // Example of a metric object
 * {
 *   label: "totalUsers",
 *   maindata: "123",
 *   subdata: "123",
 *   netpercentage: "13",
 *   netstatus: "up"
 * }
 * 
 * @example
 * // Example of the full dashboardData array (snippet)
 * [
 *   {
 *     label: "totalUsers",
 *     maindata: "123",
 *     subdata: "123",
 *     netpercentage: "13",
 *     netstatus: "up"
 *   },
 *   {
 *     label: "activeUsers",
 *     maindata: "100",
 *     subdata: "55",
 *     netpercentage: "67",
 *     netstatus: "down"
 *   },
 *   ...
 * ]
 */

export const dashboardData = [
    {
        label: "totalUsers",
        maindata: "123",
        subdata: "123",
        netpercentage: "13",
        netstatus: "up"
    },
    {
        label: "activeUsers",
        maindata: "100",
        subdata: "55",
        netpercentage: "67",
        netstatus: "down"
    },

    {
        label: "retentionRate",
        maindata: "55",
        subdata: "55",
        netpercentage: "13",
        netstatus: "up"
    },

    {
        label: "averageSearches",
        maindata: "52",
        subdata: "8",
        netpercentage: "13",
        netstatus: "up"
    },

    {
        label: "lotteryUses",
        maindata: "82",
        subdata: "55",
        netpercentage: "53",
        netstatus: "up"
    },

    {
        label: "accountDeletions",
        maindata: "55",
        subdata: "8",
        netpercentage: "3",
        netstatus: "down"
    }
]