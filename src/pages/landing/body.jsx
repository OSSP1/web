import useInput from "../../hooks/useInput";
import { BodyDiv } from "./style";
import { getResult } from "../../apis/Apis";
import { useCallback } from "react";
import { Link } from "react-router-dom";
function Body() {
    const translate = useCallback(async (e) => {
        e.preventDefault();
        const text = e.target[0].value;
        const currForm = document.getElementById('from').innerText;
        const resultBox = document.getElementById('resultBox');
        if (currForm === '제주어') {
            await getResult('d2s', text).then((response) => {
                resultBox.innerText = response;
            });
        }
        else{
            await getResult('s2d', text).then((response) => {
                resultBox.innerText = response;
            });
        }
    });

    // text
    const [ text, onChangeText, setText ] = useInput('');

    // 제주어 표준어 바꾸기
    const changeLanguage = () => {
        const from = document.getElementById('from');
        const to  = document.getElementById('to');
        
        // 제주어일 경우
        if (from.innerText==='제주어'){
            from.innerText = '표준어';
            to.innerText = '제주어';
        }
        // 표준어일 경우
        else{
            from.innerText = '제주어';
            to.innerText = '표준어';
        }
    }
    const clear = () => {
        const text = document.getElementById('text');
        const resultBox = document.getElementById('resultBox');
        text.value = '';
        resultBox.innerText='';
    }
    function translate() {
        const progressBar = document.getElementById('translation-progress');
        progressBar.value = 0; // 번역 작업 시작 전에 진행 상태를 초기화합니다.
      
        let progress = 0;
        const interval = setInterval(() => {
          progress += 10; // 예시로 10%씩 증가하는 것으로 가정합니다.
          progressBar.value = progress;
      
          if (progress >= 100) {
            clearInterval(interval);
          }
        }, 100); // 1초마다 진행 상태를 업데이트합니다.
      }



    return (
        <BodyDiv>
            <h1>제주어 번역기</h1>
            <form onSubmit={translate} onChange={onChangeText}>
                <div>
                    <p id='from'>표준어</p>
                    <p onClick={changeLanguage}>
                        {'->'} <br/>
                        바꾸기
                    </p>
                    <p id='to'>제주어</p>
                </div>
                <div>
                    <textarea name="" id="text" cols="30" rows="10"></textarea>
                    <div id="resultBox"></div>
                </div>
                <progress id="translation-progress" value="0" max="100"></progress>
                <button type="submit" onSubmit={translate}>번역하기</button>
                <p onClick={clear}>초기화</p>
                
                <h4 class="user-name"> Made by <a href="https://github.com/garden-jun">정원준</a>, <a href="https://github.com/eunbinni">신은빈</a>, <a href="https://github.com/seopp">임승섭</a></h4>
                <h4 class="user-name"> You can click on the name to check the GitHub.</h4>
            </form>
        </BodyDiv>
    )
}

export default Body