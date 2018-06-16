/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

 import React from "react";

 // @material-ui/core components
 import withStyles from "@material-ui/core/styles/withStyles";

 // @material-ui/icons
 import Schedule from "@material-ui/icons/Schedule";

 // core components
 import GridContainer from "components/Grid/GridContainer.jsx";
 import GridItem from "components/Grid/GridItem.jsx";
 import Card from "components/Card/Card.jsx";
 import CardBody from "components/Card/CardBody.jsx";
 import CardHeader from "components/Card/CardHeader.jsx";
 import CardIcon from "components/Card/CardIcon.jsx";
 import Quote from "components/Typography/Quote.jsx";

 import userProfileStyles from "./comingSoon.jsx";


 function UserProfile(props) {
   const { classes } = props;
   return (
     <div>
       <GridContainer>
         <GridItem xs={12} sm={12} md={6}>
           <Card>
             <CardHeader color="info" icon>
               <CardIcon color="info">
                 <Schedule />
               </CardIcon>
               <h4 className={classes.cardIconTitle}>
                 Coming Soon - <small>We're working really hard!</small>
               </h4>
             </CardHeader>
             <CardBody>
              <Quote text="Rome wasn't built in a day" author="Usually a smartass"/>
             </CardBody>
           </Card>
         </GridItem>
       </GridContainer>
     </div>
   );
 }

 export default withStyles(userProfileStyles)(UserProfile);
