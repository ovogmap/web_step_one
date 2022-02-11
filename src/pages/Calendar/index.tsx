import styled from "@emotion/styled";
import { data, time } from "./data";
import { EColors } from "hyosun-design-system";

interface CalendarProps {}

const Calendarindex: React.FC<CalendarProps> = () => {
  const users = ["이정곤", "김효선", "권준"];
  console.log(new Date());

  return (
    <Container>
      <Title>
        <h1>캘린더</h1>
      </Title>
      <CalendarContainer>
        <CalendarHeader>
          {users.map((user, i) => (
            <HeaderItem length={users.length} key={i}>
              {user}
            </HeaderItem>
          ))}
        </CalendarHeader>
        <CalendarBody>
          <TimeTable>
            {time.map((v) => (
              <TimeItem>
                <p>{v}</p>
              </TimeItem>
            ))}
          </TimeTable>
          <ScheduleContainer>
            {users.map((user, i) => (
              <ScheduleTable length={users.length} key={i}>
                {time.map((v) => (
                  <ScheduleTimeLine />
                ))}
              </ScheduleTable>
            ))}
          </ScheduleContainer>
        </CalendarBody>
      </CalendarContainer>
    </Container>
  );
};

export default Calendarindex;

const Container = styled.div`
  width: 100%;
  padding: 50px;
`;

const Title = styled.div`
  width: 746px;
  margin: 0 auto;
  padding: 50px 0px;
`;

const CalendarContainer = styled.div`
  margin: 0 auto;
  width: 746px;
  height: 433px;
  overflow: auto;
  position: relative;
  border: 1px solid ${EColors.black_70};
  border-radius: 8px;
`;

const CalendarHeader = styled.header`
  width: 100%;
  height: 50px;
  border-bottom: 1px solid ${EColors.black_70};
  background: #fff;
  position: sticky;
  top: 0;
  z-index: 1;
  padding-left: 38px;

  display: flex;
  flex-direction: row;
  align-items: center;

  box-shadow: rgb(0 0 0 / 20%) 0px 2px 8px;
`;

const HeaderItem = styled.div<{ length: number }>`
  width: ${({ length }) => `calc(100% / ${length})`};
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:not(:last-child) {
    border-right: 1px solid ${EColors.black_70};
  }
`;

const CalendarBody = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`;

const TimeTable = styled.div`
  padding-top: 20px;
`;

const TimeItem = styled.div`
  width: 38px;
  height: 40px;
  padding-right: 10px;
  p {
    transform: translateY(-50%);
    font-size: 12px;
    color: #b1b1b3;
    text-align: end;
  }
`;

const ScheduleContainer = styled.div`
  width: 100%;
  display: flex;
`;

const ScheduleTable = styled.div<{ length: number }>`
  width: ${({ length }) => `calc(100% / ${length})`};
  padding-top: 20px;

  &:not(:last-child) {
    border-right: 1px solid ${EColors.black_70};
  }
`;

const ScheduleTimeLine = styled.div`
  width: 100%;
  height: 21px;
  border-bottom: 1px solid #f0f1f2;
  border-top: 1px solid #d7d7d9;

  margin-bottom: 19px;
`;
const ScheduleItem = styled.div``;
