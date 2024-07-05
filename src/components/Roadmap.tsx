/* eslint-disable react/no-array-index-key */
import React, { useMemo } from 'react';
import { Typography, Box, useTheme } from '@mui/material';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdEvent } from 'react-icons/md';
import { grey } from '@mui/material/colors';
import '../css/timeline-date.css';

const roadmapItems = [
  {
    quarter: 'Q3 2024',
    title: 'Enhanced Security Features',
    description:
      'Introducing advanced threat detection and response mechanisms to improve overall security.',
  },
  {
    quarter: 'Q4 2024',
    title: 'User Interface Overhaul',
    description:
      'A complete redesign of the user interface to enhance user experience and accessibility.',
  },
  {
    quarter: 'Q1 2025',
    title: 'Integration with Third-Party Services',
    description:
      'Seamless integration with popular third-party services to extend Netstalker’s capabilities.',
  },
  // Add more roadmap items as needed
];

function Roadmap() {
  const theme = useTheme();

  const blackOrWhite = useMemo(() => {
    return theme.palette.mode === 'light'
      ? theme.palette.common.black
      : theme.palette.common.white;
  }, [theme]);
  return (
    <Box
      sx={{
        py: 8,
        px: 4,
        backgroundColor: theme.palette.mode === 'light' ? '#f0f0f0' : grey[800],
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Netstalker Roadmap
      </Typography>
      <VerticalTimeline lineColor={blackOrWhite}>
        {roadmapItems.map((item, index) => (
          <VerticalTimelineElement
            key={index}
            className="vertical-timeline-element--work"
            contentStyle={{
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
            }}
            date={item.quarter}
            dateClassName={
              theme.palette.mode === 'light' ? 'black-date' : 'white-date'
            }
            iconStyle={{
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              boxShadow:
                '0 4px 8px rgba(0, 0, 0, 0.3), 0 6px 20px rgba(0, 0, 0, 0.19)',
            }}
            icon={<MdEvent />}
          >
            <h3 className="vertical-timeline-element-title">{item.title}</h3>
            <h4 className="vertical-timeline-element-subtitle">
              {item.quarter}
            </h4>
            <p>{item.description}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Box>
  );
}

export default Roadmap;
