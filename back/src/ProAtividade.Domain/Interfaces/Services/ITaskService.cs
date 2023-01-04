using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proAtividade.Domain.Entities;

namespace ProAtividade.Domain.Interfaces.Services
{
  public interface ITaskService
  {
    Task<Atividade> AddTask(Atividade model);
    Task<Atividade> UpdateTask(Atividade model);
    Task<bool> DeleteTask(int id);
    Task<bool> ConcludeTask(Atividade model);
    Task<Atividade[]> GetAllTasksAsync();
    Task<Atividade> GetTaskByIdAsync(int id);
  }
}