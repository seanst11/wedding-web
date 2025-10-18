import './Story.css'
import { loadStoryImages } from '../../utils/loadImages'

const Story = ({ language }) => {
  const content = {
    en: {
      title: 'Our Story',
      timeline: [
        {
          year: 'Dec 27, 2019',
          title: 'Where it began, Tokyo',
          description:
            "Our story began six years ago in Tokyo. Ha was pursuing her master's degree and Sean was an exchange student. With simple, sincere hearts we started this journey—never imagining that today we would still be holding hands and walking this long road together."
        },
        {
          year: '2020–2025',
          title: 'Love from 1,600 kilometers away',
          description:
            'We loved each other across two countries for almost five years. In Taiwan and Vietnam we worked to become better versions of ourselves. It was often hard and challenging, but it deepened our trust and understanding more than ever.'
        },
        {
          year: 'Apr 27, 2025',
          title: 'Our wedding ceremony in Vietnam',
          description:
            'In December 2023 we exchanged engagement rings. In April 2025 we celebrated a traditional engagement and wedding in Vietnam, and officially became husband and wife.'
        },
        {
          year: 'Aug 2025',
          title: "We're a family!",
          description:
            'We began a new chapter and moved into our own home, shaping every corner together. Now, with our lovely cats, we are a complete family.'
        }
      ]
    },
    'zh-TW': {
      title: '我們的故事',
      timeline: [
        {
          year: '2019/12/27',
          title: '故事從東京開始',
          description:
            '我們的故事始於六年前的東京。當時，Ha 正在攻讀碩士，而 Sean 則是交換學生。我們以單純而真誠的心情展開這段旅程，未曾想到直到今天，我們仍會緊緊牽著彼此的手，一同走過這漫長的道路。'
        },
        {
          year: '2020–2025',
          title: '相距一千六百公里的愛',
          description:
            '我們曾在兩個國家之間遠距離相愛將近五年。Ha 和 Sean 都在臺灣與越南努力成為更好的自己。那段遠距離的時光雖然常常艱難又充滿挑戰，但也讓我們比以往任何時候都更加信任與理解彼此。'
        },
        {
          year: '2025/04/27',
          title: '越南的婚禮',
          description:
            '在 2023 年 12 月，我們互換了訂婚戒指。到了 2025 年 4 月，我們在越南舉行了傳統的訂婚儀式與婚禮，正式成為夫妻。'
        },
        {
          year: '2025/08',
          title: '我們是一個家庭了！',
          description:
            '我們在人生中展開了新的一章，搬進屬於我們自己的新家，每一個角落都由我們細心打造。如今，我們與可愛的貓咪們一起，已經是一個完整的家庭。'
        }
      ]
    },
    vi: {
      title: 'Câu chuyện của chúng tôi',
      timeline: [
        {
          year: '27/12/2019',
          title: 'Khởi đầu tại Tokyo',
          description:
            'Câu chuyện của chúng tôi bắt đầu cách đây sáu năm ở Tokyo. Khi đó Ha đang học cao học, còn Sean là sinh viên trao đổi. Với trái tim giản dị và chân thành, chúng tôi bắt đầu hành trình này — không ngờ rằng đến hôm nay vẫn nắm tay nhau đi trên con đường dài này.'
        },
        {
          year: '2020–2025',
          title: 'Tình yêu từ 1.600 km',
          description:
            'Chúng tôi đã yêu xa giữa hai quốc gia gần năm năm. Ở Đài Loan và Việt Nam, cả hai đều cố gắng trở nên tốt hơn. Dù nhiều lúc khó khăn và thử thách, khoảng thời gian ấy đã giúp chúng tôi tin tưởng và thấu hiểu nhau hơn bao giờ hết.'
        },
        {
          year: '27/04/2025',
          title: 'Lễ cưới của chúng tôi tại Việt Nam',
          description:
            'Tháng 12/2023, chúng tôi trao nhẫn đính hôn. Tháng 4/2025, chúng tôi tổ chức lễ đính hôn và đám cưới truyền thống tại Việt Nam, chính thức trở thành vợ chồng.'
        },
        {
          year: '08/2025',
          title: 'Chúng tôi là một gia đình!',
          description:
            'Chúng tôi mở ra chương mới của cuộc đời, chuyển vào ngôi nhà của riêng mình và chăm chút từng góc nhỏ. Giờ đây, cùng những chú mèo đáng yêu, chúng tôi đã là một gia đình trọn vẹn.'
        }
      ]
    },
    ja: {
      title: '私たちの物語',
      timeline: [
        {
          year: '2019年12月27日',
          title: '物語の始まり、東京',
          description:
            '私たちの物語は6年前の東京から始まりました。Haは修士課程、Seanは交換留学生。飾らない気持ちで歩み始め、今日もなお手を取り合って長い道を歩んでいます。'
        },
        {
          year: '2020–2025',
          title: '1600kmの距離を越えて',
          description:
            'ほぼ5年間、台湾とベトナムの二つの国で遠距離恋愛を続けました。大変で試練も多かったけれど、その時間が私たちの信頼と理解をかつてないほど深めてくれました。'
        },
        {
          year: '2025年4月27日',
          title: 'ベトナムでの結婚式',
          description:
            '2023年12月に婚約指輪を交換し、2025年4月にはベトナムで伝統的な結納と結婚式を行い、正式に夫婦になりました。'
        },
        {
          year: '2025年8月',
          title: '家族になりました！',
          description:
            '私たちは新しい章を始め、自分たちの家に引っ越しました。一つひとつのコーナーを一緒に整え、いまは可愛い猫たちとともに、かけがえのない家族です。'
        }
      ]
    }
  }

  const t = content[language] || content.en
  const storyImages = loadStoryImages()

  return (
    <section className="story" id="story">
      <h2 className="section-title">{t.title}</h2>
      <div className="timeline">
        {t.timeline.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
          >
            <div className="timeline-content">
              <div className="timeline-year">{item.year}</div>
              <h3 className="timeline-title">{item.title}</h3>
              <p className="timeline-description">{item.description}</p>
              {storyImages[index] && (
                <img src={storyImages[index]} alt={`Story ${index + 1}`} style={{ width: '100%', borderRadius: 8, marginTop: 12 }} />
              )}
            </div>
            <div className="timeline-dot"></div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Story

