/**
 * Interface representing the response for fetching dashboard data.
 * 
 * @property {boolean} status - Indicates whether the request for dashboard data was successful or not.
 * @property {DashboardServicesData} data - The actual dashboard data containing various metrics.
 * @property {string} message - A message providing additional details about the response.
 */
export interface FetchDashboardResponses {
    status: boolean;
    data: DashboardServicesData;
    message: string;
}

/**
 * Interface representing the contents of a specific dashboard metric.
 * 
 * @property {string} mainData - The primary data value for the metric.
 * @property {string} subData - Additional data related to the metric.
 * @property {string} netPercentage - The percentage change or value for the metric.
 * @property {"up" | "down" | "neutral"} netStatus - The status of the metric's change ("up", "down", or "neutral").
 */
interface DataContents {
    mainData: string;
    subData: string;
    netPercentage: string;
    netStatus: "up" | "down" | "neutral";
}

/**
 * Interface representing the dashboard services data, containing various metrics.
 * 
 * @property {DataContents} totalUsers - Data related to total number of users.
 * @property {DataContents} activeUsers - Data related to the number of active users.
 * @property {DataContents} retentionRate - Data related to the retention rate of users.
 * @property {DataContents} averageSearches - Data related to the average number of searches.
 * @property {DataContents} lotteryUses - Data related to the usage of lotteries.
 * @property {DataContents} accountDeletions - Data related to the number of account deletions.
 */
export interface DashboardServicesData {
    totalUsers: DataContents;
    activeUsers: DataContents;
    retentionRate: DataContents;
    averageSearches: DataContents;
    lotteryUses: DataContents;
    accountDeletions: DataContents;
}
