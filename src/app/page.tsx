import { Box, Divider, Stack, Typography } from '@mui/material'
import { Grid } from '@mui/system'
import UpdateTime from '@/app/updateTime'
import Image from 'next/image'

function DataRow(props: { title: string; value: string; unit: string }) {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      height="182px"
    >
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        width="1630px"
      >
        <Typography fontSize="110px" lineHeight="131.27px" fontWeight={500}>
          {props.title}
        </Typography>
        <Typography
          fontSize="130px"
          lineHeight="182px"
          letterSpacing="-0.01em"
          fontWeight={700}
        >
          {props.value}
        </Typography>
      </Stack>
      <Typography
        fontSize="110px"
        lineHeight="154px"
        letterSpacing="-0.01em"
        fontWeight={500}
      >
        {props.unit}
      </Typography>
    </Stack>
  )
}

export default function Home() {
  return (
    <Grid pt="90px" px="120px" border="1px solid black">
      {/* 타이틀 영역 */}
      <Stack
        position="relative"
        direction="row"
        height="222px"
        spacing={2}
        justifyContent="center"
        alignItems="start"
      >
        <Typography
          fontSize="140px"
          lineHeight="168px"
          letterSpacing="-0.01em"
          fontWeight={700}
        >
          태양광 발전 현황
        </Typography>
        <Box
          position="absolute"
          height="86px"
          right="0px"
          top="53px"
          px="26px"
          py="20px"
          bgcolor="#E8EAEF"
          borderRadius="40px"
        >
          <Typography
            fontSize="32px"
            lineHeight="44.8px"
            fontWeight={500}
            color="#222222"
          >
            설비 준공일 2024년 1월 22일
          </Typography>
        </Box>
      </Stack>
      <Divider sx={{ height: '4px', bgcolor: '#000000' }} />
      {/* 업데이트 시간 */}
      <UpdateTime time={'2024-10-31 13:57'} />
      {/* 발전 정보 영역 */}
      <Stack gap="88px">
        <DataRow title="설비용량" value={'630.32'} unit="kW" />
        <DataRow title="전일 발전량" value={'340.10'} unit="kWh" />
        <DataRow title="금일 발전량" value={'630.38'} unit="kWh" />
        <DataRow title="누적 발전량" value={'395,507.60'} unit="kWh" />
        <DataRow title="금일 발전시간" value={'0.57'} unit="시간" />
        <DataRow title="누적 온실가스 감축량" value={'0.57'} unit="Ton" />
        <DataRow title="금일 온도" value={'99.99'} unit="℃" />
      </Stack>
      <Box
        width="1920px"
        height="585px"
        borderRadius="18px"
        border="1.85px solid #E8EAEF"
        mt="50px"
        mb="32px"
      />
      <Image src="/img1.jpg" width={1920} height={692} alt={'이미지1'} />
      <Typography>릴리즈 테스트</Typography>
    </Grid>
  )
}
