export default function Footer() {
  return (
    <footer className="container p-3">
      <div className="row text-center">
        {/* Divider почему-то имеет отступы по краям, не критично но все равно */}
        <hr className="hr" />
        <p class="text-muted">Yakudza Karaoke Inc, 2022</p>
      </div>
    </footer>
  );
}
