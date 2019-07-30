import { Navigation } from 'react-native-navigation';

const LoadTabs = () => {
    Navigation.startTabBasedApp({
        tabs:[
            {
                screen:"mainGallery.Home",
                label:"Home",
                title:"Home",
                
            },
            
        ]
    })
}

export default LoadTabs;
