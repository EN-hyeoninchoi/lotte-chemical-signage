import {Stack, Typography} from "@mui/material";

interface UpdateTimeProps {
    time: string;
}

export default function UpdateTime(props: UpdateTimeProps) {
    return (
        <Stack alignItems='end' pt='36px' pb='40px'>
            <Typography fontSize='40px' lineHeight='56px' fontWeight={400}>최종 업데이트 {props.time}</Typography>
        </Stack>
    );
}