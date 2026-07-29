import type { ITweet } from '@/src/shared/types/tweet.interface'
import { PAGES } from '@/src/config/pages.config'
import Link from 'next/link'
import Image from 'next/image'

interface Props {
  tweet: ITweet
}

const Tweet = ({tweet}: Props) => {
  return (
    <div>
      <Image 
        src='/x-logo.svg'
        alt='X Logo'
        width={50}
        height={50}
      />
      <Link 
        href={PAGES.PROFILE(tweet.author)}
      >
        @{tweet.author}
      </Link>
      <p>{tweet.text}</p>
    </div>
  )
}

export default Tweet