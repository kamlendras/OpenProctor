import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Physics from "./subjects/physics/page";
export default function TabsBasic() {
  return (
    <Tabs
      // aria-label="Basic tabs" defaultValue={0}
      variant="soft"
      aria-label="Pricing plan"
      defaultValue={0}
      sx={{
        // width: 343,
        height: "85vh",
        borderRadius: "lg",
        boxShadow: "lg",
        overflow: "auto",
      }}
    >
      {/* <TabList
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
      }} */}
      <TabList
        disableUnderline
        tabFlex={1}
        sx={{
          // pt: 1,
          // justifyContent: 'center',
          [`&& .${tabClasses.root}`]: {
            //   flex: 'initial',
            //   bgcolor: 'transparent',
            //   '&:hover': {
            //     bgcolor: 'transparent',
            //   },
            [`&.${tabClasses.selected}`]: {
              color: "primary.plainColor",
              "&::after": {
                height: 3,
                // width:50,
                borderRadius: 8,
                // borderTopLeftRadius: 3,
                // borderTopRightRadius: 3,
                bgcolor: "primary.500",
              },
            },
          },
        }}
      >
        <Tab>
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src="phy.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
          Physics
        </Tab>
        <Tab>
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src="beaker.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
          Chemistry
        </Tab>
        <Tab>
          {" "}
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src="math3.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
          Mathematics
        </Tab>
        <Tab>
          {" "}
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src="bio.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
          Botany
        </Tab>
        <Tab>
          {" "}
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src="earth.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
          Geography
        </Tab>
        <Tab>
          {" "}
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src="res.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
          Reasoning
        </Tab>
        <Tab>
          {" "}
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src="comp.svg" alt="devices" width="30" height="30" />
          </ListItemDecorator>
          Computer
        </Tab>
      </TabList>
      <TabPanel value={0}>
        <Physics />
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
