import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import SvgIcon from '@material-ui/core/SvgIcon';

const menuSeting = [
    { 
        menu: 'Home', 
        icon: 'M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z', 
        url: '/' },
    {
        menu: 'Internship Managements',
        icon: 'M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z',
        url: '/internship'
    },
    { menu: 'Internship', icon: '', url: '/' },
    { menu: 'Import', icon: '', url: '/' },
    {
        menu: 'Courses',
        icon: 'M18 2H6c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM6 4h5v8l-2.5-1.5L6 12V4z',
        url: '/'
    },
    {
        menu: 'Setting',
        icon: 'M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z',
        url: '/'
    },
]

class MenuSettingComponent extends Component {

    constructor(props) {
        super();
        this.state = {
            elements : ''
        }
    }

    onClickMenu(url) {
        this.context.router.push(url);
    }

    render() {

        var { elements } = this.state

        elements = document.getElementsByClassName("bak");
        
            for(var i = 0; i < elements.length; i++)
            {
                elements[i].onclick = function(){                    
                    var el = elements[0];
                    console.log(el)
                    while(el)
                    {
                        if(el.tagName === "DIV"){
                            //remove class
                            el.classList.remove("active");
                            
                        }
                        // pass to the new sibling
                        el = el.nextSibling;
                    }
                    
                  this.classList.add("active");  
                };
            }


        return (
            menuSeting.map((data, index) => {
                return (
                <div className='bak'> 
                    <div className={index===2 ? 'custom' : ''} >
                        <div className={index===3 ? 'custom mb-12' : ''} >
                        <ListItem button key={data.menu} onClick={this.onClickMenu.bind(this, data.url)}>
                            <ListItemIcon>
                                <SvgIcon>
                                    <path d={data.icon} />
                                </SvgIcon>
                            </ListItemIcon>
                            <ListItemText primary={data.menu} />                        
                        </ListItem>
                    </div>
                    </div>
                </div>
                )
            })
        )
    }
}

MenuSettingComponent.contextTypes = {
    router: PropTypes.object
  };

export default MenuSettingComponent;