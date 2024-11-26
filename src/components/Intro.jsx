export const Intro = () => {
  return (
    <>
      <header className="header">
        <h1 className="header__title">
          Шерлок <span>Бум</span>
        </h1>
        <h2 className="header__desc">Убийство в день Святого Валентина</h2>
      </header>
      <h3 className="intro__title">Уважаемые детективы!</h3>
      <p className="intro__desc">
        Прежде чем приступить к игровому процессу, помните:{' '}
        <span>НЕ СПЕШИТЕ ДАВАТЬ ОТВЕТ, ПОКА НЕ УБЕДИТЕСЬ В ЕГО ПРАВИЛЬНОСТИ.</span> Тщательно
        изучайте предоставленные материалы дела, чтобы найти подтверждение своим выводам. Если вы
        сомневаетесь с вариантом ответа, не стесняйтесь использовать кнопку <span>«Помощь»</span>
      </p>
    </>
  );
};
