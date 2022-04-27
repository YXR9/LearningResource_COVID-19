import React from 'react'
import { List, Divider } from 'antd';
import { Link } from 'react-router-dom';

export default function home() {
  return (
    <div className='App'>
        <h1 style={{ textAlign: 'center', fontWeight: 'bolder' }}>新冠肺炎相關資料</h1>
        <a href='http://140.115.126.175:8000/'>返回探究系統</a>
        <Divider orientation="left" style={{fontSize: '20px', fontWeight: 'bolder'}}>COVID-19 文章</Divider>
          <List size="large" bordered>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.cdc.gov.tw/Category/Page/vleOMKqwuEbIMgqaTeXG8A' target="_blank" style={{fontSize: '20px'}}>衛生福利部疾病管制署 疾病介紹</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://wwwv.tsgh.ndmctsgh.edu.tw/newsedm/191/10000/24898/1049/195' target="_blank" style={{fontSize: '20px'}}>認識嚴重特殊傳染性肺炎（COVID-19，簡稱新型冠狀病毒肺炎）</a>} />
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.bbc.com/zhongwen/trad/science-59682454' target="_blank" style={{fontSize: '20px'}}>新冠疫情：如何判定咳嗽、流鼻水是感冒症狀還是奧密克戎</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.gvm.com.tw/article/81845' target="_blank" style={{fontSize: '20px'}}>疫情影響有多大，如何改變你的生活？3大數據揭露了</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://healthmatters.nyp.org/%e5%a6%82%e4%bd%95%e4%bf%9d%e8%ad%b7%e6%82%a8%e8%87%aa%e5%b7%b1%e5%85%8d%e5%8f%97%e6%96%b0%e5%9e%8b%e5%86%a0%e7%8b%80%e7%97%85%e6%af%92%e6%84%9f%e6%9f%93/' target="_blank" style={{fontSize: '20px'}}>預防 COVID-19：如何保護您自己免受新型冠狀病毒感染</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.bbc.com/zhongwen/trad/57403701' target="_blank" style={{fontSize: '20px'}}>台灣疫情：「停課不停學」英國是如何做的</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.cdc.gov.tw/Category/MPage/epjWGimoqASwhAN8X-5Nlw' style={{fontSize: '20px'}}>疫苗簡介</a>}/>
            </List.Item>
          </List>
          <br/>
        <Divider orientation="left" style={{fontSize: '20px', fontWeight: 'bolder'}}>COVID-19 影片資料</Divider>
          <List size="large" bordered>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.youtube.com/watch?v=5sEavyYt1us' target="_blank" style={{fontSize: '20px'}}>疫苗接種UP，群體免疫來！</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.youtube.com/watch?v=mkCFCbjnllI&t=155s' target="_blank" style={{fontSize: '20px'}}>增加 感染風險的《5 種情況》</a>} />
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.youtube.com/watch?v=Kqd7IsdOewc' target="_blank" style={{fontSize: '20px'}}>為什麼小朋友不能出門了？可怕的新型冠狀病毒，兒童如何防護新型冠狀病毒？最全科普繪本告訴你！</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.youtube.com/watch?v=0RbjN3Iw1Is' target="_blank" style={{fontSize: '20px'}}>童書「新冠病毒大解密！」介紹</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.youtube.com/watch?v=mTTrwGzXTy4' target="_blank" style={{fontSize: '20px'}}>陌生的訪客冠狀病毒</a>}/>
            </List.Item>
            <List.Item>
              <List.Item.Meta title={<a href='https://www.youtube.com/watch?v=zuAIx4nOuy0' target="_blank" style={{fontSize: '20px'}}>防疫大作戰~認識新型冠狀病毒 保護自己</a>}/>
            </List.Item>
          </List>
    </div>
  )
}
