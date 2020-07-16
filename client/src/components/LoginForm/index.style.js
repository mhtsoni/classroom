import styled from 'styled-components'
import 'antd/dist/antd.css';
import {Card} from 'antd';
export const LoginWrapper = styled(Card)`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  .inp{
      margin-bottom:10px;
  }
`;