"use client";

// import { Metadata } from "next"
import { Fragment, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import Link from "next/link";

// export const metadata: Metadata = {
//   title: 'Project Request | Nangman Agency',
//   description: 'Project Request | Nangman Agency',
// }

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Home() {
  const [termsAgree, setTermsAgree] = useState(true);

  return (
    // bg-[#04070B] text-white
    <main className="min-h-screen py-80">
      <div className=" mx-auto h-full max-w-[90vw] xl:max-w-screen-xl">
        <div className="flex h-full flex-row">
          <div className="flex w-full flex-col">
            <form className="">
              {/* <h2 className="font-tenada leading-[1.1] pb-2">당신이 아닌 우리의<br />서비스를 만듭니다.</h2>
              <p>사용자 친화적인 서비스를 가장 중요하게 생각하는,</p>
              <p>저희는 진짜 서비스에 집중하는 낭만팀입니다.</p> */}

              <h2 className="font-tenada pb-2 leading-[1.1]">
                우리는 창조자에 불과합니다.
                <br />
                여러분이 주인공입니다.
              </h2>
              <p>매 순간, 진심을 다해 사용자 중심의 서비스를 구축합니다.</p>
              <p>
                우리의 이름은 &apos;낭만&apos;, 진정한 서비스의 가치를 꿈꾸는
                팀입니다.
              </p>

              <div className="my-6 h-[1px] bg-black/50"></div>

              <p className="mb-7 text-xl">1. 기본정보를 입력해주세요.</p>

              <div className="grid grid-cols-1 gap-x-6 gap-y-6 pb-5 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="flex pl-1">
                    회사명
                    <p className="ml-1 pt-1.5 text-xs font-semibold text-red-600">
                      (필수)
                    </p>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="block size-12 w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="flex pl-1">
                    담당자/직책(직함)
                    <p className="ml-1 pt-1.5 text-xs font-semibold text-red-600">
                      (필수)
                    </p>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="block size-12 w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="flex pl-1">
                    연락처
                    <p className="ml-1 pt-1.5 text-xs font-semibold text-red-600">
                      (필수)
                    </p>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="block size-12 w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="flex pl-1">
                    이메일
                    <p className="ml-1 pt-1.5 text-xs font-semibold text-red-600">
                      (필수)
                    </p>
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="block size-12 w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="pl-1">홈페이지</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="block size-12 w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="pl-1">회사주소</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="block size-12 w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              {/* 원하시는 서비스 정보를 입력해주세요. */}
              <div className="my-6 h-[1px] bg-black/50"></div>

              <p className="mb-7 text-xl">
                2. 원하시는 서비스 정보를 입력해주세요.
              </p>

              <div className="grid grid-cols-1 gap-x-6 gap-y-6 pb-5 sm:grid-cols-6">
                <div className="sm:col-span-3">
                  <label className="pl-1">서비스 유형</label>
                  <div className="mt-2">
                    {/* <input type="text" name="last-name" id="last-name" className="block w-full size-12 rounded-md border py-1.5 px-3 text-gray-900 shadow-sm sm:leading-6" /> */}
                    <select
                      id="currency"
                      name="currency"
                      className="size-12 w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm sm:leading-6"
                    >
                      <option>PROP-TECH</option>
                      <option>APP/WEB SERVICE</option>
                      <option>VERBAL BRANDING</option>
                      <option>BX/PUBLISHING</option>
                    </select>
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="pl-1">낭만을 알게 된 경로</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="block size-12 w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="pl-1">예상 오픈일</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="block size-12 w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="pl-1">예상 금액 (단위 : 만원)</label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="last-name"
                      id="last-name"
                      className="block size-12 w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="pl-1">참고사이트 (레퍼런스)</label>
                  <div className="mt-2">
                    <textarea
                      name="last-name"
                      id="last-name"
                      className="block size-36 w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm sm:leading-6"
                    />
                  </div>
                </div>

                <div className="sm:col-span-3">
                  <label className="pl-1">기타 요구사항</label>
                  <div className="mt-2">
                    <textarea
                      name="last-name"
                      id="last-name"
                      className="block size-36 w-full rounded-md border px-3 py-1.5 text-gray-900 shadow-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>

              {/* 개인정보 취급방침 */}
              <div className="my-6 h-[1px] bg-black/50"></div>

              <p className="mb-7 text-xl">3. 개인정보 취급방침에 대한 동의</p>

              <div className="pb-5">
                <div className="relative flex gap-x-2 pl-1">
                  <div className="flex h-6 items-center">
                    <input
                      id="candidates"
                      name="candidates"
                      type="checkbox"
                      checked={termsAgree}
                      onChange={(e) => setTermsAgree(e.target.checked)}
                      className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-600"
                    />
                  </div>
                  <div className="text-sm leading-6">
                    <label
                      htmlFor="candidates"
                      className="font-medium text-gray-900"
                    >
                      개인정보 취급방침 및 이용약관에 동의합니다.
                    </label>
                  </div>
                </div>
                <div className="mt-2 max-h-60 overflow-y-auto bg-black/10 p-8">
                  <div className="h-full">
                    &apos;낭만 에이전시&apos;는 (이하 &apos;회사&apos;는)
                    고객님의 개인정보를 중요시하며, &lsquo;정보통신망 이용촉진
                    및 정보보호&rsquo;에 관한 법률을 준수하고 있습니다.
                    <br />
                    <br />
                    회사는 개인정보취급방침을 통하여 고객님께서 제공하시는
                    개인정보가 어떠한 용도와 방식으로 이용되고 있으며,
                    개인정보보호를 위해 어떠한 조치가 취해지고 있는지
                    알려드립니다.
                    <br />
                    <br />
                    회사는 개인정보취급방침을 개정하는 경우 웹사이트
                    공지사항(또는 개별공지)을 통하여 공지할 것입니다.
                    <br />
                    <br />
                    ■ 본 방침은 2024 년 03 월 01 일 부터 시행됩니다.
                    <br />
                    <br />
                    ■ 수집하는 개인정보 항목
                    <br />
                    회사는 회원가입, 상담, 서비스 신청 등을 위해 아래와 같은
                    개인정보를 수집하고 있습니다.
                    <br />
                    <br />
                    - 수집항목 : 이름, 비밀번호, 휴대전화번호, 이메일, 회사명,
                    부서, 회사 전화번호, 접속 로그, 접속 IP 정보, 프로젝트 의뢰
                    정보
                    <br />
                    - 개인정보 수집 방법 : 홈페이지(프로젝트 의뢰)
                    <br />
                    <br />
                    ■ 개인정보의 수집 및 이용목적
                    <br />
                    회사는 수집한 개인정보를 다음의 목적을 위해 활용합니다.
                    <br />
                    <br />
                    - 서비스 제공에 관한 계약 이행 및 서비스 제공에 따른
                    요금정산
                    <br />
                    콘텐츠 제공
                    <br />
                    <br />
                    - 기타
                    <br />
                    프로젝트 의뢰에 따른 요구정보
                    <br />
                    <br />
                    ■ 개인정보의 보유 및 이용기간
                    <br />
                    원칙적으로, 개인정보 수집 및 이용목적이 달성된 후에는 해당
                    정보를 지체 없이 파기합니다. 단, 다음의 정보에 대해서는
                    아래의 이유로 명시한 기간 동안 보존합니다.
                    <br />
                    <br />
                    보존 항목 : 이름
                    <br />
                    보존 근거 : 프로젝트 의뢰에 따른 자료 저장
                    <br />
                    보존 기간 : 영구 보존 또는 일정기간 후 삭제
                    <br />
                    <br />
                    그리고 관계법령의 규정에 의하여 보존할 필요가 있는 경우
                    회사는 아래와 같이 관계법령에서 정한 일정한 기간 동안
                    회원정보를 보관합니다.
                    <br />
                    보존 항목 : 휴대전화번호 , 이메일 , 회사명 , 부서 ,
                    회사전화번호 , 접속 로그 , 접속 IP 정보 , 프로젝트의뢰정보
                    <br />
                    보존 근거 : 프로젝트 의뢰에 따른 자료 저장
                    <br />
                    보존 기간 : 영구보존 또는 일정기간 후 삭제
                    <br />
                    <br />
                    ■ 개인정보의 파기절차 및 방법
                    <br />
                    회사는 원칙적으로 개인정보 수집 및 이용목적이 달성된 후에는
                    해당 정보를 지체없이 파기합니다. 파기절차 및 방법은 다음과
                    같습니다.
                    <br />
                    <br />
                    - 파기절차
                    <br />
                    회원님이 회원가입 등을 위해 입력하신 정보는 목적이 달성된 후
                    별도의 DB로 옮겨져(종이의 경우 별도의 서류함) 내부 방침 및
                    기타 관련 법령에 의한 정보보호 사유에 따라(보유 및 이용기간
                    참조) 일정 기간 저장된 후 파기되어집니다.
                    <br />
                    별도 DB로 옮겨진 개인정보는 법률에 의한 경우가 아니고서는
                    보유되어지는 이외의 다른 목적으로 이용되지 않습니다.
                    <br />
                    <br />
                    - 파기방법
                    <br />
                    전자적 파일형태로 저장된 개인정보는 기록을 재생할 수 없는
                    기술적 방법을 사용하여 삭제합니다.
                    <br />
                    <br />
                    ■ 개인정보 제공
                    <br />
                    회사는 이용자의 개인정보를 원칙적으로 외부에 제공하지
                    않습니다. 다만, 아래의 경우에는 예외로 합니다.
                    <br />
                    - 이용자들이 사전에 동의한 경우
                    <br />
                    - 법령의 규정에 의거하거나, 수사 목적으로 법령에 정해진
                    절차와 방법에 따라 수사기관의 요구가 있는 경우
                    <br />
                    <br />
                    ■ 수집한 개인정보의 위탁
                    <br />
                    회사는 고객님의 동의없이 고객님의 정보를 외부 업체에
                    위탁하지 않습니다. 향후 그러한 필요가 생길 경우, 위탁
                    대상자와 위탁 업무 내용에 대해 고객님에게 통지하고 필요한
                    경우 사전 동의를 받도록 하겠습니다.
                    <br />
                    <br />
                    ■ 이용자 및 법정대리인의 권리와 그 행사방법
                    <br />
                    이용자 및 법정 대리인은 언제든지 등록되어 있는 자신의 정보를
                    조회할 수 있도록 요청할 수 있으며 삭제를 요청할수 있습니디.
                    <br />
                    이용자의 개인정보 조회 및 수정을 위해서는 상담게시판의 경우
                    비밀번호를 입력하여 자신의 정보를 완전히 삭제하실수
                    있습니다, 혹은 개인정보관리책임자에게 서면, 전화 또는
                    이메일로 연락하시면 지체없이 조치하겠습니다.
                    <br />
                    귀하가 개인정보의 오류에 대한 정정을 요청하신 경우에는
                    정정을 완료하기 전까지 당해 개인정보를 이용 또는 제공하지
                    않습니다.
                    <br />
                    프로젝트 의뢰의 경우 수집하는 개인정보의 보유 및 이용기간”에
                    명시된 바에 따라 처리하고 그 외의 용도로 열람 또는 이용할 수
                    없도록 처리하고 있습니다.
                    <br />
                    <br />
                    ■ 개인정보 자동수집 장치의 설치, 운영 및 그 거부에 관한 사항
                    <br />
                    회사는 귀하의 정보를 수시로 저장하고 찾아내는 ‘쿠키(cookie)’
                    등을 운용합니다. 쿠키란 낭만 에이전시의 웹사이트를
                    운영하는데 이용되는 서버가 귀하의 브라우저에 보내는 아주
                    작은 텍스트 파일로서 귀하의 컴퓨터 하드디스크에 저장됩니다.
                    회사은(는) 다음과 같은 목적을 위해 쿠키를 사용합니다.
                    <br />
                    <br />
                    ▶ 쿠키 등 사용 목적
                    <br />
                    방문자의 접속 빈도나 방문 시간 등을 분석, 이용자의 취향과
                    관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문
                    회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스 제공
                    <br />
                    귀하는 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서,
                    귀하는 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를
                    허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면
                    모든 쿠키의 저장을 거부할 수도 있습니다.
                    <br />
                    <br />
                    ▶ 쿠키 설정 거부 방법
                    <br />
                    예: 쿠키 설정을 거부하는 방법으로는 회원님이 사용하시는 웹
                    브라우저의 옵션을 선택함으로써 모든 쿠키를 허용하거나 쿠키를
                    저장할 때마다 확인을 거치거나, 모든 쿠키의 저장을 거부할 수
                    있습니다.
                    <br />
                    <br />
                    설정방법의 예시 (인터넷 익스플로어의 경우) : 웹 브라우저
                    상단의 도구 - 인터넷 옵션 - 개인정보
                    <br />
                    <br />
                    단, 귀하께서 쿠키 설치를 거부하였을 경우 서비스 제공에
                    어려움이 있을 수 있습니다.
                    <br />
                    <br />
                    ■ 개인정보에 관한 민원서비스
                    <br />
                    회사는 고객의 개인정보를 보호하고 개인정보와 관련한 불만을
                    처리하기 위하여 아래와 같이 관련 부서 및
                    개인정보관리책임자를 지정하고 있습니다.
                    <br />
                    <br />
                    성명 : 이결
                    <br />
                    전화번호 : 070-8798-0110
                    <br />
                    이메일 : help@aresa.io
                    <br />
                    <br />
                    귀하께서는 회사의 서비스를 이용하시며 발생하는 모든
                    개인정보보호 관련 민원을 개인정보관리책임자 혹은 담당부서로
                    신고하실 수 있습니다. 회사는 이용자들의 신고사항에 대해
                    신속하게 충분한 답변을 드릴 것입니다.
                    <br />
                    <br />
                    기타 개인정보침해에 대한 신고나 상담이 필요하신 경우에는
                    아래 기관에 문의하시기 바랍니다.
                    <br />
                    1.개인정보침해신고센터 (www.118.or.kr/국번없이 118)
                    <br />
                    2.정보보호마크인증위원회 (www.eprivacy.or.kr/02-580-0533~4)
                    <br />
                    3.대검찰청 인터넷범죄수사센터
                    (http://icic.sppo.go.kr/02-3480-3600)
                    <br />
                    4.경찰청 사이버테러대응센터 (www.ctrc.go.kr/02-392-0330)
                    <br />
                  </div>
                </div>
              </div>

              {/* 문의 */}
              <div className="my-6 h-[1px] bg-black/50"></div>

              <div className="flex flex-row justify-center gap-x-2">
                <a
                  href="#"
                  className="inline-block rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  프로젝트 문의하기
                </a>
                <Link
                  href="/"
                  className="inline-block rounded-md border border-transparent bg-gray-300 px-8 py-3 text-center font-medium text-white hover:bg-indigo-700"
                >
                  취소
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}
