import * as React from "react";
import Tabs from "@mui/joy/Tabs";
import TabList from "@mui/joy/TabList";
import Tab, { tabClasses } from "@mui/joy/Tab";
import TabPanel from "@mui/joy/TabPanel";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import Subject1 from "./subject/1";
import Subject2 from "./subject/2";
import Subject3 from "./subject/3";
import Subject4 from "./subject/4";
import Subject5 from "./subject/5";
import Subject6 from "./subject/6";
import Subject7 from "./subject/7";
import Test from "../../test.json"
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
            <img src={Test.subjects.aicon} alt="icon" width="30" height="30" />
          </ListItemDecorator>
          {Test.subjects.a}
        </Tab>
        <Tab>
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src={Test.subjects.bicon} alt="icon" width="30" height="30" />
          </ListItemDecorator>
          {Test.subjects.b}
        </Tab>
        <Tab>
          {" "}
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src={Test.subjects.cicon} alt="icon" width="30" height="30" />
          </ListItemDecorator>
          {Test.subjects.c}
        </Tab>
        <Tab>
          {" "}
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src={Test.subjects.dicon} alt="icon" width="30" height="30" />
          </ListItemDecorator>
          {Test.subjects.d}
        </Tab>
        <Tab>
          {" "}
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src={Test.subjects.eicon} alt="icon" width="30" height="30" />
          </ListItemDecorator>
          {Test.subjects.e}
        </Tab>
        <Tab>
          {" "}
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src={Test.subjects.ficon} alt="icon" width="30" height="30" />
          </ListItemDecorator>
          {Test.subjects.f}
        </Tab>
        <Tab>
          {" "}
          <ListItemDecorator sx={{ mx: 0.01 }}>
            <img src={Test.subjects.gicon} alt="icon" width="30" height="30" />
          </ListItemDecorator>
          {Test.subjects.g}
        </Tab>
      </TabList>
      <TabPanel value={0}>
      <Subject1/>
      </TabPanel>
      <TabPanel value={1}>
      <Subject2/>
      </TabPanel>
      <TabPanel value={2}>
      <Subject3/>
      </TabPanel>
      <TabPanel value={3}>
      <Subject4/>
      </TabPanel>
      <TabPanel value={4}>
      <Subject5/>
      </TabPanel>
      <TabPanel value={5}>
      <Subject6/>
      </TabPanel>
      <TabPanel value={6}>
      <Subject7/>
      </TabPanel>
    </Tabs>
  );
}