import React from "react";
import NavBar from "../../../../components/NavBar";
import MenuSideBar from "../../../../components/MenuSideBar";
import NavTabs from "../../../../components/NavTabs";
import {Box} from "@material-ui/core";
import AuthView from "../../../../components/AuthView";

const index = () => {
    return (
        <AuthView>
            <NavBar/>
            <NavTabs tabSelected={1}/>
            <Box display="flex">
                <MenuSideBar/>
                Code page
            </Box>
        </AuthView>
    );
};

export default index;
