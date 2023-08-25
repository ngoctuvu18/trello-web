//Components
import Column from './Column/Column'

//Mui Components
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'

//Mui Icon
import NoteAddIcon from '@mui/icons-material/NoteAdd'

//thu vien
import { SortableContext, horizontalListSortingStrategy } from '@dnd-kit/sortable'

function ListColumns({ columns }) {
  /*
    SortableContext yeu cau items la 1 mang string chu khong phai la 1 mang object
    neu khong dung thi van keo tha duoc nhung khong co animation
  */
  return (
    <SortableContext items={columns?.map(c => c._id)} strategy={horizontalListSortingStrategy}>
      <Box
        sx={{
          bgcolor: 'inherit',
          width: '100%',
          height: '100%',
          display: 'flex',
          overflowX: 'auto',
          overflowY: 'hidden',
          '&::-webkit-scrollbar-track': { m: 2 }
        }}
      >
        {columns?.map(column => (
          <Column key={column._id} column={column} />
        ))}

        {/* Box add new column */}
        <Box
          sx={{
            minWidth: '200px',
            maxHeight: '200px',
            mx: 2,
            height: 'fit-content',
            borderRadius: '6px',
            bgcolor: '#ffffff3d'
          }}
        >
          <Button
            startIcon={<NoteAddIcon />}
            sx={{ color: 'white', width: '100%', justifyContent: 'flex-start', pl: 2.5, py: 1 }}
          >
            Add New Column
          </Button>
        </Box>
      </Box>
    </SortableContext>
  )
}

export default ListColumns
