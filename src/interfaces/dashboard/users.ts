/**
 * Interface representing the data of a single user.
 * 
 * @property {string} key - The unique identifier for the user.
 * @property {string} nickname - The nickname chosen by the user.
 * @property {string} email - The email address associated with the user.
 * @property {string} birthMonth - The month of birth of the user.
 * @property {string} gender - The gender of the user.
 * @property {string} location - The location (city or region) of the user.
 * @property {string} registrationDate - The date the user registered on the platform.
 */
export interface UsersData {
    key: string;
    nickname: string;
    email: string;
    birthMonth: string;
    gender: string;
    location: string;
    registrationDate: string;
}

/**
 * Interface representing the response for fetching user data.
 * 
 * @property {boolean} status - Indicates whether the request to fetch user data was successful or not.
 * @property {UsersData[]} data - An array of user data objects, each representing an individual user.
 * @property {string} message - A message providing additional details about the response.
 */
export interface FetchUsersResponse {
    status: boolean;
    data: UsersData[];
    message: string;
}
