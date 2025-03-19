export interface BlogInfo {
  title: string;
  date: string;
  folder: string;
  imageCount: number;
}

export const blogInfo: Record<string, BlogInfo> = {
  'lions-club': {
    title: 'Partnership with Lion\'s Club',
    date: 'December 2021',
    folder: 'lions-club',
    imageCount: 3
  },
  'concepcion-grande': {
    title: 'Barangay Concepcion Grande Support',
    date: 'December 2020',
    folder: 'concepcion-grande',
    imageCount: 6
  },
  'employee-support': {
    title: 'Employee Support During COVID-19',
    date: 'April 2020',
    folder: 'employee-support',
    imageCount: 3
  },
  'outreach-2021': {
    title: '2021 Outreach Program',
    date: 'December 2021',
    folder: 'outreach-2021',
    imageCount: 3
  },
  'panicuason': {
    title: 'Barangay Panicuason Support',
    date: 'December 2020',
    folder: 'panicuason',
    imageCount: 3
  }
};

export const getBlogImages = (folder: string) => {
  const images = [];
  const imageCount = blogInfo[folder]?.imageCount || 0;
  
  for (let i = 1; i <= imageCount; i++) {
    images.push(`/social/${folder}/img${i}.png`);
  }
  return images;
};

export const getRelatedStories = (currentFolder: string, count: number = 2) => {
  return Object.entries(blogInfo)
    .filter(([folder]) => folder !== currentFolder)
    .map(([_, info]) => info)
    .slice(0, count);
};

// Map of folders to their image counts
export const blogImageCounts = {
  'concepcion-grande': 6, // has img1.png to img6.png
  'employee-support': 3,  // has img1.png to img3.png
  'lions-club': 3,       // has img1.png to img3.png
  'outreach-2021': 3,    // has img1.png to img3.png
  'panicuason': 3        // has img1.png to img3.png
};

export const blogFolders = Object.keys(blogImageCounts); 