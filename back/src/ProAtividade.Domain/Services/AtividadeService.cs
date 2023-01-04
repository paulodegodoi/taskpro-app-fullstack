using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using proAtividade.Domain.Entities;
using ProAtividade.Domain.Interfaces.Repositories;
using ProAtividade.Domain.Interfaces.Services;

namespace ProAtividade.Domain.Services
{
  public class AtividadeService : ITaskService
  {
    private readonly ITaskRepo _atividadeRepo;
    private readonly IGenericRepo _genericRepo;
    public AtividadeService(ITaskRepo atividadeRepo, IGenericRepo genericRepo)
    {
      _atividadeRepo = atividadeRepo;
      _genericRepo = genericRepo;

    }

    public async Task<Atividade[]> GetAllTasksAsync()
    {
      try
      {
        var tasks = await _atividadeRepo.GetAllTasksAsync();
        if (tasks == null) return null;

        return tasks;
      }
      catch (System.Exception ex)
      {
        throw new Exception(ex.Message);
      }
    }

    public async Task<Atividade> GetTaskByIdAsync(int id)
    {
      try
      {
        var task = await _atividadeRepo.GetTaskByIdAsync(id);
        if (task == null) return null;

        return task;
      }
      catch (System.Exception ex)
      {
        throw new Exception(ex.Message);
      }
    }
    public async Task<Atividade> AddTask(Atividade model)
    {
      if (await _atividadeRepo.GetTaskByNameAsync(model.Name) != null)
        throw new Exception("Este nome já está sendo usado");

      if (await _atividadeRepo.GetTaskByIdAsync(model.Id) == null)
      {
        _atividadeRepo.Add(model);
        if (await _atividadeRepo.SaveChangesAsync())
          return model;
      }

      return null;
    }

    public async Task<Atividade> UpdateTask(Atividade model)
    {
      if (model.DataConclusao != null)
        throw new Exception("Não é possível alterar uma atividade já concluída.");

      if (await _atividadeRepo.GetTaskByIdAsync(model.Id) != null)
      {
        _atividadeRepo.Update(model);
        if (await _atividadeRepo.SaveChangesAsync())
          return model;
      }

      return null;
    }

    public async Task<bool> ConcludeTask(Atividade model)
    {
      if (model != null)
      {
        model.Conclude();
        _atividadeRepo.Update<Atividade>(model);
        return await _atividadeRepo.SaveChangesAsync();
      }

      return false;
    }

    public async Task<bool> DeleteTask(int id)
    {
      var task = await _atividadeRepo.GetTaskByIdAsync(id);
      if (task == null) throw new Exception("Essa atividade não existe.");

      _atividadeRepo.Delete(task);
      return await _atividadeRepo.SaveChangesAsync();
    }
  }
}