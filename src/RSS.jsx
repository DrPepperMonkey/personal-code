import * as React from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';

const heights = [150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: 'primary.light',
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: 'left',
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: 'secondary.light',
  }),
}));

export default function RSS() {
  return (
    <Box
      sx={{
        backgroundColor: 'RGB(0, 0, 0)',
        width: '50%',
        height: '45%',
        position: 'fixed',
        bottom: 0,
        left: '25%',
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        p: 2,
      }}>
       <Masonry columns={4} spacing={2} >
        {heights.map((height, index) => (
          <Item key={index} sx={{ height }}>
            {index + 1}
          </Item>
        ))}
      </Masonry>
        </Box>
  );
}