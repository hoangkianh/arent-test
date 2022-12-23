import React from 'react'
import { Diary } from 'types'
import { MyDiaryItemWrapper, MyDiaryDate, MyDiaryExcerpt } from './Styled'

function MyDiaryItem({ diary }: { diary: Diary }) {
  const diaryDate = new Date(diary.date * 1000)

  return (
    <MyDiaryItemWrapper>
      <MyDiaryDate>
        <span>{`${diaryDate.getMonth() + 1}.${diaryDate.getDate()}.${diaryDate.getFullYear()}`}</span>
        <br />
        <span>{`${diaryDate.getHours()}:${diaryDate.getMinutes()}`}</span>
      </MyDiaryDate>
      <MyDiaryExcerpt>{diary.excerpt}</MyDiaryExcerpt>
    </MyDiaryItemWrapper>
  )
}

export default MyDiaryItem
