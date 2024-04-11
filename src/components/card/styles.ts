import styled from 'styled-components/native';
import Colors from '../../config/Colors';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: ${Colors.blueDark};
  border-radius: 30px;
  border-bottom-right-radius: 4px;
  border-left-color: ${Colors.blueLight}; 
  padding: 20px;
  margin: 10px;
  `;

  export const Content = styled.View`
    flex: 1;
    padding: 10px;
    flex-direction: row;
    align-items: center;
  `;
  
  export const Nome = styled.Text`
    font-size: 18px;
    line-height: 18px;
    color: ${Colors.blueMedium}; 
    font-weight: bold;
    margin-bottom: 5px;
  `;
  
  export const Email = styled.Text`
    color: ${Colors.blueMedium}; 
    font-size: 13px;
  `;
  
  export const User = styled.Text`
    color: ${Colors.blueMedium}; 
    font-size: 13px;
  `;
  
  export const Password = styled.Text`
    color: ${Colors.blueMedium};
    font-size: 15px;
    font-weight: bold;
  `;
  
export const viewLoading = styled.View`
    color: ${Colors.blue};
    font-size: 15px;
    font-weight: bold;
  `;

export const Button = styled.TouchableOpacity`
    border:2px solid ${Colors.blueDark};
    background-color: ${Colors.blueDark};
    background: ${Colors.blueDark};
    padding:  10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition: 0.5s all ease-out;`