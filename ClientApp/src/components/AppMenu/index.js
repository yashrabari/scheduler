import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import Divider from '@material-ui/core/Divider'
import Collapse from '@material-ui/core/Collapse'

import IconExpandLess from '@material-ui/icons/ExpandLess'
import IconExpandMore from '@material-ui/icons/ExpandMore'
import { Link } from 'react-router-dom'


const AppMenuItem = props => {
    const { name, Icon, link, items = [] } = props
    const classes = useStyles()
    const isExpandable = items && items.length > 0
    const [open, setOpen] = React.useState(false)

    function handleClick() {
        setOpen(!open)
    }

    const MenuItemRoot = (
        <Link style={{ textDecoration: 'none' }} className={classes.navLink} to={link ? link : "#"}>
            <ListItem button className={classes.menuItem} onClick={handleClick}>
                {/* Display an icon if any */}
                {!!Icon && (
                    <ListItemIcon className={classes.menuItemIcon}>
                        <Icon />
                    </ListItemIcon>
                )}

                <ListItemText primary={name} inset={!Icon} />
                {/* Display the expand menu if the item has children */}
                {isExpandable && !open && <IconExpandMore />}
                {isExpandable && open && <IconExpandLess />}
            </ListItem>
        </Link>
    )

    const MenuItemChildren = isExpandable ? (
        <Collapse in={open} timeout="auto" unmountOnExit>
            <Divider />
            <List component="div" disablePadding>
                {items.map((item, index) => {
                    return <AppMenuItem key={index} {...item} />
                })}
            </List>
        </Collapse>
    ) : null

    return (
        <>
            {MenuItemRoot}
            {MenuItemChildren}
        </>
    )
}


const useStyles = makeStyles(theme =>
    createStyles({
        menuItem: {},
        menuItemIcon: {
            color: '#97c05c',
        },
        navLink: {
            color: '#fff'
        }


    }),
)

export default AppMenuItem
