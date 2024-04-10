import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  background-color: #466F70;
  border-radius: 30px;
  border-bottom-right-radius: 4px;
  border-left-color: #A0DFE0;
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
    color: #A0DFE0;
    font-weight: bold;
    margin-bottom: 5px;
  `;
  
  export const Email = styled.Text`
    color: #A0DFE0;
    font-size: 13px;
  `;
  
  export const User = styled.Text`
    color: #A0DFE0;
    font-size: 13px;
  `;
  
  export const Password = styled.Text`
    color: #A0DFE0;
    font-size: 15px;
    font-weight: bold;
  `;
  
export const viewLoading = styled.View`
    color: #A0DFE0;
    font-size: 15px;
    font-weight: bold;
  `;

export const Button = styled.TouchableOpacity`
    border:2px solid #466F70;
    background-color: '#466F70';
    background: #466F70;
    padding:  10px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    transition: 0.5s all ease-out;`