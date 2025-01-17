import Icons from "@/themes/icons/icons";

/**
 * Represents the structure of a navigation link.
 * 
 * @interface NavigationLinks
 * @property {string} path - The path of the navigation link.
 * @property {string} label - The label to display for the navigation link.
 * @property {keyof typeof Icons} defaultIcon - The icon to display when the link is not active.
 * @property {keyof typeof Icons} activeIcon - The icon to display when the link is active.
 */
interface NavigationLinks {
  path: string;
  label: string;
  defaultIcon: keyof typeof Icons;
  activeIcon: keyof typeof Icons;
}

// Define navigation links as a constant
/**
 * A list of navigation links used in the application.
 * Each link includes a path, label, and associated icons for both default and active states.
 * 
 * @constant {NavigationLinks[]} navigationLinks
 * @example
 * [
 *   { path: "/dashboard", label: "ダッシュボード", defaultIcon: "dashBoardNormal", activeIcon: "dashBoardSelected" },
 *   { path: "/dashboard/users", label: "登録ユーザー", defaultIcon: "multipleUsersNormal", activeIcon: "multipleUsersSelected" },
 *   { path: "/dashboard/rewards", label: "当選者", defaultIcon: "rewardsNormal", activeIcon: "rewardsNormal" },
 *   { path: "/dashboard/admin", label: "運営管理者", defaultIcon: "superAdmin", activeIcon: "superAdmin" }
 * ]
 */
const navigationLinks: NavigationLinks[] = [
  { path: "/dashboard", label: "ダッシュボード", defaultIcon: "dashBoardNormal", activeIcon: "dashBoardSelected" },
  { path: "/dashboard/users", label: "登録ユーザー", defaultIcon: "multipleUsersNormal", activeIcon: "multipleUsersSelected" },
  { path: "/dashboard/rewards", label: "当選者", defaultIcon: "rewardsNormal", activeIcon: "rewardsNormal" },
  { path: "/dashboard/admin", label: "運営管理者", defaultIcon: "superAdmin", activeIcon: "superAdmin" }
];

/**
 * Checks if the given path is active based on the current pathname.
 * The link is considered active if the pathname matches the link's path or starts with the link's path.
 *
 * @param {string} path - The path of the link.
 * @param {string} pathname - The current pathname.
 * @returns {boolean} `true` if the link is active, otherwise `false`.
 * 
 * @example
 * const isActive = getActiveStatus("/dashboard", "/dashboard/users"); // Returns true
 */
export const getActiveStatus = (path: string, pathname: string): boolean => {
  return pathname === path || pathname.startsWith(`${path}/`);
};

/**
 * Navigates to the specified path using the provided navigation function.
 *
 * @param {string} path - The path to navigate to.
 * @param {(path: string) => void} navigate - The navigation function that performs the navigation.
 * 
 * @example
 * navigateTo("/dashboard", router.push); // Navigates to the dashboard path
 */
export const navigateTo = (path: string, navigate: (path: string) => void) => {
  navigate(path); // Perform the navigation
};

export { navigationLinks };
