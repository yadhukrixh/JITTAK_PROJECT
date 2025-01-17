/**
 * Array of active users.
 * 
 * This array contains a list of active users with their details such as nickname, 
 * email, birth month, gender, location, and registration date. The data can be used 
 * to display user information in various parts of the application, such as a user 
 * dashboard, profile page, or notification system.
 * 
 * Each user object in the array contains the following properties:
 * 
 * @typedef {Object} User
 * @property {string} key - A unique identifier for the user.
 * @property {string} nickname - The nickname of the user.
 * @property {string} email - The email address of the user.
 * @property {string} birthMonth - The birth month and year of the user.
 * @property {string} gender - The gender of the user.
 * @property {string} location - The location (e.g., city, prefecture) of the user.
 * @property {string} registrationDate - The date the user registered.
 * 
 * @example
 * // Example of a user object
 * {
 *   key: "1",
 *   nickname: "ゆうと",
 *   email: "example1@example.com",
 *   birthMonth: "1992年 12月",
 *   gender: "男性",
 *   location: "東京都",
 *   registrationDate: "2024年 01月 12日"
 * }
 * 
 * @example
 * // Example of the full ActiveUsers array (snippet)
 * [
 *   {
 *     key: "1",
 *     nickname: "ゆうと",
 *     email: "example1@example.com",
 *     birthMonth: "1992年 12月",
 *     gender: "男性",
 *     location: "東京都",
 *     registrationDate: "2024年 01月 12日"
 *   },
 *   {
 *     key: "2",
 *     nickname: "ニックネーム",
 *     email: "user234@example.net",
 *     birthMonth: "1987年 5月",
 *     gender: "女性",
 *     location: "東京都",
 *     registrationDate: "2024年 01月 12日"
 *   },
 *   ...
 * ]
 */

export const ActiveUsers = [
    {
      key: "1",
      nickname: "ゆうと",
      email: "example1@example.com",
      birthMonth: "1992年 12月",
      gender: "男性",
      location: "東京都",
      registrationDate: "2024年 01月 12日",
    },
    {
      key: "2",
      nickname: "ニックネーム",
      email: "user234@example.net",
      birthMonth: "1987年 5月",
      gender: "女性",
      location: "東京都",
      registrationDate: "2024年 01月 12日",
    },
    {
      key: "3",
      nickname: "わんこ好き",
      email: "test_user@gmail.com",
      birthMonth: "1996年 10月",
      gender: "男性",
      location: "東京都",
      registrationDate: "2024年 01月 12日",
    },
    {
      key: "4",
      nickname: "あおい",
      email: "aoi@example.com",
      birthMonth: "1995年 4月",
      gender: "女性",
      location: "大阪府",
      registrationDate: "2024年 01月 10日",
    },
    {
      key: "5",
      nickname: "ポンたろう",
      email: "ponta@example.co.jp",
      birthMonth: "1988年 8月",
      gender: "男性",
      location: "京都府",
      registrationDate: "2024年 01月 09日",
    },
    {
      key: "6",
      nickname: "まきやん",
      email: "maki@example.net",
      birthMonth: "1990年 3月",
      gender: "女性",
      location: "北海道",
      registrationDate: "2024年 01月 08日",
    },
    {
      key: "7",
      nickname: "たつや",
      email: "tatsuya@example.com",
      birthMonth: "1992年 12月",
      gender: "男性",
      location: "大阪府",
      registrationDate: "2024年 01月 07日",
    },
    {
      key: "8",
      nickname: "ひまわりさん",
      email: "himawari@example.co.jp",
      birthMonth: "1985年 6月",
      gender: "女性",
      location: "福岡県",
      registrationDate: "2024年 01月 06日",
    },
    {
      key: "9",
      nickname: "きんたろう",
      email: "kintaro@example.org",
      birthMonth: "2000年 1月",
      gender: "男性",
      location: "神奈川県",
      registrationDate: "2024年 01月 05日",
    },
    {
      key: "10",
      nickname: "ねこ好き",
      email: "neko@example.com",
      birthMonth: "1994年 11月",
      gender: "女性",
      location: "東京都",
      registrationDate: "2024年 01月 04日",
    },
    {
      key: "11",
      nickname: "さくらんぼ",
      email: "sakura@example.net",
      birthMonth: "1997年 7月",
      gender: "女性",
      location: "愛知県",
      registrationDate: "2024年 01月 03日",
    },
    {
      key: "12",
      nickname: "しんじ",
      email: "shinji@example.org",
      birthMonth: "1991年 2月",
      gender: "男性",
      location: "大阪府",
      registrationDate: "2024年 01月 02日",
    },
    {
      key: "13",
      nickname: "あやの",
      email: "ayano@example.com",
      birthMonth: "1990年 8月",
      gender: "女性",
      location: "静岡県",
      registrationDate: "2024年 01月 01日",
    },
    {
      key: "14",
      nickname: "やまと",
      email: "yamato@example.net",
      birthMonth: "1989年 5月",
      gender: "男性",
      location: "沖縄県",
      registrationDate: "2023年 12月 31日",
    },
    {
      key: "15",
      nickname: "あおい",
      email: "aoi@example.com",
      birthMonth: "1998年 6月",
      gender: "女性",
      location: "奈良県",
      registrationDate: "2023年 12月 30日",
    },
    {
      key: "16",
      nickname: "ひかる",
      email: "hikaru@example.org",
      birthMonth: "1993年 10月",
      gender: "男性",
      location: "広島県",
      registrationDate: "2023年 12月 29日",
    },
    {
      key: "17",
      nickname: "けんた",
      email: "kenta@example.com",
      birthMonth: "1995年 12月",
      gender: "男性",
      location: "京都府",
      registrationDate: "2023年 12月 28日",
    },
    {
      key: "18",
      nickname: "ふじこ",
      email: "fujiko@example.net",
      birthMonth: "1996年 3月",
      gender: "女性",
      location: "福島県",
      registrationDate: "2023年 12月 27日",
    },
    {
      key: "19",
      nickname: "りょう",
      email: "ryo@example.org",
      birthMonth: "1992年 4月",
      gender: "男性",
      location: "東京都",
      registrationDate: "2023年 12月 26日",
    },
    {
      key: "20",
      nickname: "みほ",
      email: "miho@example.com",
      birthMonth: "1990年 7月",
      gender: "女性",
      location: "愛媛県",
      registrationDate: "2023年 12月 25日",
    },
    {
      key: "21",
      nickname: "まなぶ",
      email: "manabu@example.net",
      birthMonth: "1987年 5月",
      gender: "男性",
      location: "兵庫県",
      registrationDate: "2023年 12月 24日",
    },
    {
      key: "22",
      nickname: "けいこ",
      email: "keiko@example.co.jp",
      birthMonth: "1991年 9月",
      gender: "女性",
      location: "千葉県",
      registrationDate: "2023年 12月 23日",
    },
    {
      key: "23",
      nickname: "たけし",
      email: "takeshi@example.com",
      birthMonth: "1985年 1月",
      gender: "男性",
      location: "福岡県",
      registrationDate: "2023年 12月 22日",
    },
    {
      key: "24",
      nickname: "りお",
      email: "rio@example.net",
      birthMonth: "1993年 5月",
      gender: "女性",
      location: "大阪府",
      registrationDate: "2023年 12月 21日",
    },
    {
      key: "25",
      nickname: "しずか",
      email: "shizuka@example.org",
      birthMonth: "1998年 11月",
      gender: "女性",
      location: "東京都",
      registrationDate: "2023年 12月 20日",
    },
    {
      key: "26",
      nickname: "たくみ",
      email: "takumi@example.com",
      birthMonth: "1997年 8月",
      gender: "男性",
      location: "岡山県",
      registrationDate: "2023年 12月 19日",
    },
    {
      key: "27",
      nickname: "じゅん",
      email: "jun@example.net",
      birthMonth: "1999年 3月",
      gender: "男性",
      location: "長崎県",
      registrationDate: "2023年 12月 18日",
    },
    {
      key: "28",
      nickname: "さとみ",
      email: "satomi@example.co.jp",
      birthMonth: "1994年 2月",
      gender: "女性",
      location: "埼玉県",
      registrationDate: "2023年 12月 17日",
    },
    {
      key: "29",
      nickname: "やすお",
      email: "yasuo@example.com",
      birthMonth: "1986年 10月",
      gender: "男性",
      location: "神奈川県",
      registrationDate: "2023年 12月 16日",
    },
    {
      key: "30",
      nickname: "えり",
      email: "eri@example.net",
      birthMonth: "1990年 7月",
      gender: "女性",
      location: "北海道",
      registrationDate: "2023年 12月 15日",
    },
  ];