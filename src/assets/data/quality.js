const quality = {
  125: 'HDR真彩',
  120: '4K超清',
  116: '1080P60帧',
  112: '1080P+高码率',
  80: '1080P',
  74: '720P60帧',
  64: '720P',
  32: '480P清晰',
  16: '320P流畅'
}

const userQuality = {
  0: [16, 32, 64, 74, 80],
  1: [16, 32, 64, 74, 80, 112],
  2: [16, 32, 64, 74, 80, 112, 116, 120, 125]
}

export {
  quality,
  userQuality
}
