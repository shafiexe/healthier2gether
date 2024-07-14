import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';

const blogList = [
  {
    publishedOn: 'July 10th 2024',
    title: 'Unlocking The Complexities Of Healthcare: Understanding The Impact Of Low Trust And Health Literacy',
    url: '/blogs/impact_LT_&_HL'
  }
]

export default function BlogCards() {
  return (
    <Box my={3} mx={1}>
      {blogList.map((blog, ind) => (
        <Card key={ind} sx={{ maxWidth: 400 }}>
          <CardActionArea href={blog.url}>
            <CardContent>
              <Typography gutterBottom variant="subtitle1">
                {blog.publishedOn}
              </Typography>
              <Typography variant="body1" color="text.secondary">
                {blog.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>
  );
}
