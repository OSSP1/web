import styled from "styled-components";

export const BodyDiv = styled.div`
    
    h1{
        text-align: center;
        margin-top: 30px;
    }

    form{
        
        width:70%;
        margin: 0 auto;

        div:nth-child(1){
            display: flex;
            p{
                text-align: center;
                font-size: 25px;
            }
            p:nth-child(1){
                width: 45%;
            }
            p:nth-child(2){
                width: 10%;
                cursor: pointer;
                color: #00B9FF;
            }
            p:nth-child(3){
                width: 45%;
            }

        }

        div:nth-child(2){
            
            display: flex;
            justify-content: space-between;

            textarea{
                width: 45%;
                height: 400px;
                box-sizing: border-box;
                padding: 10px;
                border: 3px solid #eee;
                font-size: 20px;
                overflow: auto;
                resize: none;
            }

            div{
                width: 45%;
                height: 400px;
                border: 3px solid #eee;
                box-sizing: border-box;
                font-size: 20px;
                padding: 10px;
            }
        }

        button{
            display: block;
            border: none;
            background-color: #fff;
            margin: 0 auto;
            width: 20%;
            margin-top: 20px;
            font-size: 25px;
            cursor: pointer;
            padding: 0;
            line-height: 2;
            border-radius: 10px;
            background-color: #00B9FF;
            color: #fff;
        }
    }
`