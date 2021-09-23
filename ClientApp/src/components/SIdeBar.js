import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import AppMenuItem from './AppMenu'
import IconDashboard from '@material-ui/icons/Dashboard'
import IconLibraryBooks from '@material-ui/icons/LibraryBooks'

const AppMenu = () => {
    const classes = useStyles()

    const appMenuItems = [
        {
            name: 'Dashboard',
            link: '/',
            Icon: IconDashboard,
        },

        {
            name: 'Time Tabel',
            Icon: IconLibraryBooks,
            items: [
                {
                    name: 'Semester 1',
                    link: '/time-table/sem1'
                },
                {
                    name: 'Semester 2',
                    link: '/time-table/sem2'
                },
                {
                    name: 'Semester 3',
                    link: '/time-table/sem3'
                },

            ],
        },
    ]



    return (
        <List component="nav" className={classes.appMenu} disablePadding>
            {appMenuItems.map((item, index) => (
                <AppMenuItem {...item} key={index} />
            ))}
        </List>
    )
}

const drawerWidth = 240

const useStyles = makeStyles(theme =>
    createStyles({
        appMenu: {
            width: '100%',
        },
        navList: {
            width: drawerWidth,
        },
        menuItem: {
            width: drawerWidth,
        },
        menuItemIcon: {
            color: '#97c05c',
        },
    }),
)

export default AppMenu
