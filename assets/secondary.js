document.querySelectorAll('[data-consult]').forEach(item=>item.addEventListener('click',()=>{
  const source=item.dataset.consult||'在线咨询';
  location.href=`consult.html?source=${encodeURIComponent(source)}`;
}));
