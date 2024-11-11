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
        name: 'chat',
        title: 'Сообщения',
        link: '/chat/1'
    },
    {
        name: 'logout',
        title: 'Выйти',
        link: '/logout'
    }
];