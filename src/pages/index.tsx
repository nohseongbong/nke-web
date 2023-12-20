import {Inter} from 'next/font/google';
import styles from '@styles/header.module.css';
import Header from '@/components/Header';

const inter = Inter({subsets: ['latin']});

export default function Home() {
  return (
    <div className="App">
      <section className="containe h-screen">
        Speedometer가 들어갈 자리입니다!
      </section>
      <section className="containe mb-8 mt-8">
        Graph가 들어갈 자리입니다!
      </section>
      <section className="containe mb-8 mt-8">
        Chart가 들어갈 자리입니다!
      </section>
      <footer className="text-gray-700 body-font">
        <div className="bg-gray-200">
          <div className="container mx-auto pt-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <p className="text-gray-500 text-sm text-center sm:text-left">
              © 동글동글
            </p>
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              경기도 용인시 처인구 모현읍 외대로 81, 한국외국어대학교
            </span>
          </div>
          <div className="container mx-auto pb-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <span className="sm:ml-auto sm:mt-0 mt-2 sm:w-auto w-full sm:text-left text-center text-gray-500 text-sm">
              Developed by 김도영, 김주원, 김태우, 정서영
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}
