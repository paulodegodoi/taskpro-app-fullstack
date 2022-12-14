using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace proAtividadeAPI.Models
{
  public class Atividade
  {
    public int Id { get; set; }
    public string Nome { get; set; }
    public string Descricao { get; set; }
    public Prioridade Prioridade { get; set; }
  }
}