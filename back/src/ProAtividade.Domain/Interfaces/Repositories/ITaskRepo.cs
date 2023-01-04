using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Repositories
{
  public interface ITaskRepo : IGenericRepo
  {
    Task<Atividade[]> GetAllTasksAsync();
    Task<Atividade> GetTaskByIdAsync(int id);
    Task<Atividade> GetTaskByNameAsync(string name);
  }
}