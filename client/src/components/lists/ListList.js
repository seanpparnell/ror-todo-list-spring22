import List from './List';

const ListList = ({ lists, updateList, deleteList }) => (
  <>
    { lists.map( l => 
      <List
        key={l.id}
        {...l}
        updateList={updateList}
        deleteList={deleteList}
      />
    )}
  </>
)

export default ListList;