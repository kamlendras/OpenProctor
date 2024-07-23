import * as React from 'react';
import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab, { tabClasses } from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import Physics from "./subjects/physics/page"
export default function TabsBasic() {
  return (
    <Tabs 
    // aria-label="Basic tabs" defaultValue={0}
    variant="soft"
    aria-label="Pricing plan"
    defaultValue={0}
    sx={{
      // width: 343,
      height:"85vh",
      borderRadius: 'lg',
      boxShadow: 'lg',
      overflow: 'auto',
    }}
    
    >
      <TabList
      disableUnderline
      tabFlex={1}
      sx={{
        [`& .${tabClasses.root}`]: {
          fontSize: 'sm',
          fontWeight: 'lg',
          [`&[aria-selected="true"]`]: {
            color: 'primary.500',
            bgcolor: 'background.surface',
          },
          [`&.${tabClasses.focusVisible}`]: {
            outlineOffset: '-4px',
          },
        },
      }}
      
      
      >
        <Tab disableIndicator variant="soft" ><ListItemDecorator>
        <img src="phy.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Physics</Tab>
        <Tab disableIndicator variant="soft" >
        <ListItemDecorator>
        <img src="chem.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>
            Chemistry</Tab>
        <Tab disableIndicator variant="soft" >  <ListItemDecorator>
        <img src="math3.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Mathematics</Tab>
            <Tab disableIndicator variant="soft" >  <ListItemDecorator>
        <img src="bio.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Biology</Tab>
            <Tab disableIndicator variant="soft" >  <ListItemDecorator>
        <img src="eco.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Economics</Tab>
            <Tab disableIndicator variant="soft" >  <ListItemDecorator>
        <img src="res.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Reasoning</Tab>
            <Tab disableIndicator variant="soft" >  <ListItemDecorator>
        <img src="comp.svg" alt="devices" width="30" height="30" />
            </ListItemDecorator>Computer</Tab>
      </TabList>
      <TabPanel value={0}>
       <Physics/>
      </TabPanel>
      <TabPanel value={1}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={2}>
        <b>Third</b> tab panel
      </TabPanel>
      <TabPanel value={3}>
        <b>First</b> tab panel
      </TabPanel>
      <TabPanel value={4}>
        <b>Second</b> tab panel
      </TabPanel>
      <TabPanel value={5}>
        <b>Third</b> tab panel
      </TabPanel>
      <TabPanel value={6}>
        <b>Third</b> tab panel
      </TabPanel>
    </Tabs>
  );
}
