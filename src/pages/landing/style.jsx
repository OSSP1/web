import styled from "styled-components";

export const BodyDiv = styled.div`
    
    h1{
        text-align: center;
        margin-top: 30px;
    }

    .user-name {
        display: flex;
        justify-content: center;
        align-items: center;
        color: gray;
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
        p:nth-child(4){
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
            color: #00B9FF;
            text-align: center;
            border: 3px solid #00B9FF;
            box-sizing: border-box;
        }
        /* 반응형 */
        @media screen and (max-width:1000px){
            div:nth-child(1){
                p{
                    font-size: 100%;
                }
                p:nth-child(1){
                    width: 30%;
                    font-size: 110%;
                    line-height: 2;
                }
                p:nth-child(2){
                    width: 40%;
                }
                p:nth-child(3){
                    width: 30%;
                    font-size: 110%;
                    line-height: 2;
                }

            }

            div:nth-child(2){
                display: block;
                textarea{
                    width:100%;
                    height: 200px;
                }

                div{
                    width:100%;
                    height: 200px;
                }
            }

            button{
                width: 50%;
                font-size: 20px;
            }
            p:nth-child(4){
                width: 50%;
                font-size: 20px;
            }
        }
    }
    
`