import React from "react";
import ReactTable from "react-table";
import Tool from 'components/Tool/Tool';
import ToolSection from 'components/Tool/ToolSection';
import ToolBody from 'components/Tool/ToolBody';
import AssignmentTurnedIn from '@material-ui/icons/AssignmentTurnedIn';
const VotingTable = props => {
  return(
    <Tool>
      <ToolSection md={12}>
        <ToolBody color="warning" icon={AssignmentTurnedIn} header="Block Producers" subheader=" - Vote and support the community">
          <ReactTable
            data={[
              {name:'GenerEOS',position:1,votes:20,actions:null},
              {name:'EOS Cafe',position:2,votes:10,actions:null},
            ]}
            filterable
            columns={[
              {
                Header: "Name",
                accessor: "name",
              },
              {
                Header: "Position",
                accessor: "position"
              },
              {
                Header: "Votes",
                accessor: "votes"
              },
              {
                Header: "Actions",
                accessor: "actions",
                sortable: false,
                filterable: false,
              }
            ]}
            defaultPageSize={10}
            showPaginationTop
            showPaginationBottom={false}
            className="-striped -highlight"
          />

        </ToolBody>
      </ToolSection>
    </Tool>
  );
}

export default VotingTable;
