import * as React from 'react';
import { DetailsList, DetailsListLayoutMode, MarqueeSelection ,Selection, IColumn, TextField, ITextFieldStyles, Text } from 'office-ui-fabric-react';
 
export interface IDetailsListBasicExampleItem {
  key: number;
  name: string;
  value: number;
  type: string;
}
 
export interface IDetailsListBasicExampleState {
  items: IDetailsListBasicExampleItem[];
  selectionDetails: string;
}
 
export class DetailsListBasicExample extends React.Component<{}, IDetailsListBasicExampleState> {
  private _selection: Selection;
  private _allItems: IDetailsListBasicExampleItem[];
  private _columns: IColumn[];
 
  constructor(props: {}) {
    super(props);
 
    this._selection = new Selection({
      onSelectionChanged: () => this.setState({ selectionDetails: this._getSelectionDetails() }),
    });
 
    // Populate with items for demos.
    this._allItems = [];
    for (let i = 0; i < 200; i++) {
      this._allItems.push({
        key: i,
        name: 'Item ' + i,
        value: i,
        type: i % 2 == 0 ? "EVEN" : "ODD"
      });
    }
 
    this._columns = [
      { key: 'column1', name: 'Name', fieldName: 'name', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column2', name: 'Value', fieldName: 'value', minWidth: 100, maxWidth: 200, isResizable: true },
      { key: 'column3', name: 'Type', fieldName: 'type', minWidth: 100, isResizable: true }
    ];
 
    this.state = {
      items: this._allItems,
      selectionDetails: this._getSelectionDetails(),
    };
  }
 
  public render(): JSX.Element {
    const { items, selectionDetails } = this.state;
 
    return (
      <div>
        <div className="">{selectionDetails}</div>
        <Text>
          Note: While focusing a row, pressing enter or double clicking will execute onItemInvoked, which in this
          example will show an alert.
        </Text>
 
        <TextField
          className=""
          label="Filter by name:"
          onChange={this._onFilter}
        />
 
        <MarqueeSelection selection={this._selection}>
          <DetailsList
            items={items}
            columns={this._columns}
            setKey="set"
            layoutMode={DetailsListLayoutMode.justified}
            selection={this._selection}
            selectionPreservedOnEmptyClick={true}
            ariaLabelForSelectionColumn="Toggle selection"
            ariaLabelForSelectAllCheckbox="Toggle selection for all items"
            checkButtonAriaLabel="select row"
            onItemInvoked={this._onItemInvoked}
          />
        </MarqueeSelection>
      </div>
    );
  }
 
  private _getSelectionDetails(): string {
    const selectionCount = this._selection.getSelectedCount();
 
    switch (selectionCount) {
      case 0:
        return 'No items selected';
      case 1:
        return '1 item selected: ' + (this._selection.getSelection()[0] as IDetailsListBasicExampleItem).name;
      default:
        return `${selectionCount} items selected`;
    }
  }
 
  private _onFilter : any = (ev: React.FormEvent<HTMLInputElement | HTMLTextAreaElement>, text: string): void => {
    this.setState({
      items: text ? this._allItems.filter(i => i.name.toLowerCase().indexOf(text) > -1) : this._allItems,
    });
  };
 
  private _onItemInvoked = (item: IDetailsListBasicExampleItem): void => {
    alert(`Item invoked: ${item.name}`);
  };
}
