type appbarMenuLink = {
    name: string;
    title: string;
    link: string;
};
export const appbarMenuLinks: appbarMenuLink[] = [
    {
        name: 'profile',
        title: 'Профиль',
        link: '/profile'
    },
    {
        name: 'favourites',
        title: 'Избранное',
        link: '/favourites'
    },
    {
        name: 'logout',
        title: 'Выйти',
        link: '/logout'
    }
];